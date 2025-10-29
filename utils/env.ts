if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY in .env file");
}


if (!process.env.tavily_API_KEY) {
  throw new Error("Missing tavily_API_KEY in .env file");
}


export const ENV = {
  GROQ_API_KEY: process.env.GROQ_API_KEY!,
  TAVILY_API_KEY: process.env.tavily_API_KEY!,
};