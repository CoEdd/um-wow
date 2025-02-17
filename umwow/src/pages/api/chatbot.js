import OpenAI from "openai";

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      // Call OpenAI's API to generate a response
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Use the updated model
        messages: [
          {
            role: "user",
            content: message, // User's input
          },
        ],
        max_tokens: 100, // Limit the response length
        temperature: 0.7, // Controls randomness
      });

      // Extract the response text
      const reply = response.choices[0].message.content.trim();

      // Send the response back to the client
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Error calling OpenAI API:", error.message);

      // Check for specific errors
      if (error.message.includes("401")) {
        return res.status(401).json({ error: "Invalid OpenAI API key" });
      }

      res.status(500).json({ error: "Failed to generate response" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}