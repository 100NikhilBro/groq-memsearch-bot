# 🤖 Groq MemSearch Bot

An **AI-powered conversational bot** built using **Groq LLM**, **Tavily Web Search**, and **MemorySaver**, designed to enable:

- 🧠 **Normal Conversations**
- 🌐 **Real-time Web Search**
- 💾 **Contextual Memory (Persistent Chat Context)**

This bot leverages **LangGraph**, **TypeScript**, and **Bun** for a modular and fast AI agent experience.

---

## ⚙️ Tech Stack

| Category | Tools |
|-----------|-------|
| 🧩 Framework | [LangGraph](https://js.langchain.com/docs/langgraph/) |
| 🧠 LLM | [Groq](https://console.groq.com/) |
| 🌐 Web Search | [Tavily API](https://tavily.com/) |
| 💾 Memory | MemorySaver (LangGraph built-in) |
| ⚡ Runtime | [Bun](https://bun.sh/) |
| 🧑‍💻 Language | TypeScript |

---

## 🚀 Features

✅ **1. Normal AI Chatting** — Responds to general questions  
✅ **2. Web Search** — Fetches real-time information using Tavily  
✅ **3. Memory Context** — Remembers conversation using MemorySaver  
✅ **4. Tool Invocation** — Uses LangGraph’s ToolNode for dynamic behavior  
✅ **5. Terminal-based interaction** — Chat directly in your terminal

---

## 🧰 Project Structure

```
groq-memsearch-bot/
│ ├── index.ts 
│ ├── utils/
│ │ └── env.ts
│ └── graph/
│   └── flow.ts 
│   └── memory.ts
├── llm/
│ │ └── groqClient.ts
├── utils/
│ │ └── travily.ts

As u see in FolderStruture
```

---

## 🔑 Environment Variables

Create a `.env` file in your root folder:

```env
GROQ_API_KEY="your_groq_api_key"
TAVILY_API_KEY="your_tavily_api_key"

```

## 🧩 Setup & Run
bun init -y
bun install
bun run index.ts


## 🖼️ Preview

### 🧠 Normal + Web Conversation Mode
![Normal Chat](https://github.com/100NikhilBro/groq-memsearch-bot/blob/main/Screenshot%202025-10-30%20002555.png)

### 🌐 Web Search + Memory Mode
![Web Search](https://github.com/100NikhilBro/groq-memsearch-bot/blob/main/Screenshot%202025-10-30%20002656.png)



