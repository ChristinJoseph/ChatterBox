import axios from "axios";

export async function getLLMReply(userMessage) {
  const response = await axios.post(
    "https://router.huggingface.co/v1/chat/completions",
    {
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        { role: "system", content: "You are a helpful chatbot." },
        { role: "user", content: userMessage },
      ],
      max_tokens: 200,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      timeout: 60000,
    }
  );

  return response.data.choices[0].message.content;
}
