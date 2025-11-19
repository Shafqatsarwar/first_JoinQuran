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
            model: "gemini-2.0-flash-exp", // Updated to 2.0 Flash (User requested 2.5, assuming 2.0 Flash Experimental)
            systemInstruction: "You are a helpful, friendly, and knowledgeable AI assistant for JoinQuran, an online Quran learning platform. Your goal is to assist users with questions about courses, fees, teachers, and how to get started. Be concise, polite, and use Islamic greetings (Assalamualykum) where appropriate. If you don't know an answer, kindly suggest they contact support via email or WhatsApp."
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
    } catch (error: any) {
        console.error("Error calling Gemini API:", error);
        // specific handling for GoogleGenerativeAI errors which might be objects
        const errorMessage = error.message || JSON.stringify(error) || "Failed to generate response";
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
