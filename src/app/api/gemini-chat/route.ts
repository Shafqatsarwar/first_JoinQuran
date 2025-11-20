import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "GOOGLE_API_KEY is not defined" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash", // Reverted to 1.5 Flash due to 2.0-exp rate limits
            systemInstruction: "You are a helpful, friendly, and knowledgeable AI assistant for JoinQuran, an online Quran learning platform: https://www.joinquran.com/. Your goal is to assist users with questions about courses, fees, teachers, and how to get started. Get the file first to see an appropriate answer: JoinQuran.pdf. Be concise, polite, and use Islamic greetings (Assalamualykum) where appropriate. If a user submits a message or asks for support, confirm that 'we will get back to you soon' and kindly suggest they can also contact support via email or WhatsApp if urgent."
        });

        const body = await req.json();
        const { input } = body;

        if (!input) {
            return NextResponse.json({ error: "Input is required" }, { status: 400 });
        }

        const result = await model.generateContent(input);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ output_text: text });
    } catch (error: unknown) {
        console.error("Error calling Gemini API:", error);

        let errorMessage = "Failed to generate response";

        if (error instanceof Error) {
            errorMessage = error.message;
            // Check for specific GoogleGenerativeAI error details if available
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((error as any).response) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    errorMessage += ` - ${JSON.stringify((error as any).response)}`;
                } catch { }
            }
        } else if (typeof error === 'string') {
            errorMessage = error;
        } else {
            try {
                errorMessage = JSON.stringify(error);
                if (errorMessage === '{}') errorMessage = "Unknown error (empty object)";
            } catch {
                errorMessage = "Unknown error (non-serializable)";
            }
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
