import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { description } = await req.json();

    if (!description) {
      console.error("Missing description");
      return NextResponse.json({ error: "Description is required" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Suggest a short task title based on this description: "${description}"`,
        },
      ],
    });

    const suggestion = completion.choices[0].message.content;
    return NextResponse.json({ suggestion });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ error: "Failed to get suggestion" }, { status: 500 });
  }
}

