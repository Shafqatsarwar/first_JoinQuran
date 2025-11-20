import { NextResponse } from 'next/server';

// We need to define the Agent logic here since we can't easily import from the parent project
// without complex config. We will create a simplified version that hits OpenAI directly
// or uses the same logic if we copy the files.
// For simplicity and robustness in this standalone app, we will implement a basic
// OpenAI chat completion here, using the system prompt from the main app.

const SYSTEM_PROMPT = `You answer all user queries in 10–20 words, always concise, factual, and precise. Follow this priority order for information:
1. Website content: https://www.joinquran.com/
2. General Islamic knowledge if related to Quran learning.
3. When responding:
- Provide short, direct answers only.
- Do not create unnecessary details.
- Maintain a neutral, helpful tone.
- If unclear, ask for clarification using minimal words.`;

export async function POST(request: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json(
            { error: 'Chatbot is not configured. Missing OpenAI API key.' },
            { status: 500 },
        );
    }

    try {
        const { input } = await request.json();

        if (!input || typeof input !== 'string') {
            return NextResponse.json(
                { error: 'A valid question is required.' },
                { status: 400 },
            );
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Using a fast, efficient model
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: input }
                ],
                max_tokens: 150,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.statusText}`);
        }

        const data = await response.json();
        const output_text = data.choices[0]?.message?.content || "I couldn't generate a response.";

        return NextResponse.json({ output_text });
    } catch (error) {
        console.error('Chatbot API error:', error);
        return NextResponse.json(
            { error: 'Unable to connect to the chatbot right now.' },
            { status: 500 },
        );
    }
}
