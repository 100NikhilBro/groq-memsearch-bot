import {ChatGroq} from '@langchain/groq'
import { ENV } from '../utils/env';

export const createGroqClient = (tools: any) => {

  const llm = new ChatGroq({
    apiKey: ENV.GROQ_API_KEY,
    model: 'openai/gpt-oss-120b',
    temperature: 0,
    maxRetries: 2,
  }).bindTools(tools);

  return llm;

};