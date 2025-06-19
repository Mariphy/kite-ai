import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { Groq } from 'groq-sdk';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, 
});

const groqChatModel = {
  async generate(messages: { role: string; content: string }[]) {
    const response = await groq.chat.completions.create({
      model: 'llama3-70b-8192', // or another supported Groq model
      messages,
    });
    return {
      text: response.choices[0]?.message?.content ?? "",
    };
  },
};

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': groqChatModel, 
        'chat-model-reasoning': wrapLanguageModel({
          model: groqChatModel,
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': groqChatModel,
        'artifact-model': groqChatModel,
      },
      imageModels: {
        //'small-model': groq.image('grok-2-image'),
      },
    });
