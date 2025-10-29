import readline from 'node:readline/promises';
import { createGraph } from './graph/flow.js';

const app = createGraph();

const Input = async (): Promise<void> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    const userInput = await rl.question('You: ');
    const userInputLower = userInput.toLowerCase().trim();

    if (userInputLower.includes('bye')) break;

    const finalState = await app.invoke({
      messages: [{ role: 'user', content: userInput }],
    }, { configurable: { thread_id: "1" } });

    const lastMessage: any = finalState.messages[finalState.messages.length - 1];
    console.log(`AI: ${lastMessage.content}`);
  }

  rl.close();
};

Input();
