import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const MODELS = ["gemini-2.5-flash", "gemini-2.5-pro"];

const SYSTEM_INSTRUCTION = `
You are a helpful, polite, and friendly AI assistant for JoinQuran.

Core Behaviour:
- Always begin with the Islamic greeting in Arabic:
"اَلسَّلَامُ عَلَيْكُم"
- Be concise, respectful, and supportive
- Give accurate and careful answers, especially regarding fees and payments

About Fees (Very Important Sensitive Topic):
- Monthly fee structure starts from:
  • 2 days per week classes: £20 (GBP) or $25 (USD) per month
  • Up to 6 days per week classes: £35 (GBP) or $50 (USD) per month
- Always mention fees as a **starting range** (not fixed depends on plan & level)
- Avoid over-promising, use careful and professional wording

Answering Priority (Very Important Rules):
1) First check internal project files, especially: src/app/fees.tsx for accurate fee details
2) Then check the FAQ file in the public folder: JoinQuran_FAQ.pdf
3) Then use our main websites as references:
   - Primary: "https://first-join-quran.vercel.app/"
   - Secondary (Parent): "https://www.joinquran.com/"
4) Only if needed, use general web knowledge for general information or global knowledge

Always include a RELEVANT QUOTED LINK from OUR website based on the user's question, such as:
- [View Fees – JoinQuran](https://first-join-quran.vercel.app/fees)
- [FAQ – JoinQuran](https://first-join-quran.vercel.app/faq)
- [How We Teach – JoinQuran](https://www.joinquran.com/How We Teach)
- [About Us – JoinQuran](https://www.joinquran.com/About Us)
- [Contact Us – JoinQuran](https://www.joinquran.com/Contact Us)

If more help is required, always end with:
"Send us your query in the "Contact Us" section — we will get back to you soon, in sha Allah."
`;


export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "GOOGLE_API_KEY is not defined" },
                { status: 500 }
            );
        }

        const { input } = await req.json();

        if (!input || typeof input !== "string") {
            return NextResponse.json(
                { error: "Valid 'input' is required" },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        let lastError: unknown = null;

        // Try models one by one (2.5 -> 1.5 fallback)
        for (const modelName of MODELS) {
            try {
                const model = genAI.getGenerativeModel({
                    model: modelName,
                    systemInstruction: SYSTEM_INSTRUCTION
                });

                const result = await model.generateContent(input);
                const response = result.response;
                const text = response.text();

                return NextResponse.json({
                    model_used: modelName,
                    output_text: text
                });

            } catch (err) {
                console.warn(`Model failed: ${modelName}`, err);
                lastError = err;
            }
        }

        throw lastError;

    } catch (error: unknown) {
        console.error("Gemini API Error:", error);

        let errorMessage = "Failed to generate response";

        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        } else {
            try {
                const str = JSON.stringify(error);
                if (str && str !== "{}") {
                    errorMessage = str;
                }
            } catch {
                errorMessage = "Unknown non-serializable error";
            }
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
