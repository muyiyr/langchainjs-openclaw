import { Ollama } from '@langchain/ollama';

// 最简环境校验：创建实例（不发起请求）
const llm = new Ollama({ model: 'llama3' });

console.log('Ollama LLM instance created:');
console.log(llm);
