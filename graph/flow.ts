import { MessagesAnnotation, StateGraph } from '@langchain/langgraph';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { tools } from '../tools/tavily.js';
import { createGroqClient } from '../llm/groqClient.js';
import { checkpointer } from './memory.js';

const toolNode = new ToolNode(tools);
const llm = createGroqClient(tools);

const callModel = async (state: any) => {
  console.log("Calling LLM...");
  const responses = await llm.invoke(state.messages);
  return { messages: [responses] };
};

const shouldContinue = (state: any) => {
  const lastMessage = state.messages[state.messages.length - 1];
  if (lastMessage.tool_calls?.length > 0) {
    return 'tools';
  }
  return '__end__';
};

export const createGraph = () => {
  const graphFlow = new StateGraph(MessagesAnnotation)
    .addNode("agent", callModel)
    .addNode("tools", toolNode)
    .addEdge("__start__", "agent")
    .addEdge("tools", "agent")
    .addConditionalEdges("agent", shouldContinue);

  return graphFlow.compile({ checkpointer });
};
