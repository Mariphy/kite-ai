import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { InferenceClient } from "@huggingface/inference";
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

// Initialize Hugging Face client
const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

const qwen2ChatModel = {
  specificationVersion: "v1" as const,
  provider: "qwen2",
  modelId: "qwen2-7b-instruct",
  defaultObjectGenerationMode: "json" as const,
  
  async generate(messages: { role: string; content: string; }[]) {
    try {
      // Check if API key exists
      if (!process.env.HUGGINGFACE_API_KEY) {
        throw new Error('HUGGINGFACE_API_KEY not found');
      }

      console.log('Making request to Qwen2 with messages:', messages);

      // Convert messages to the format expected by the chat completion API
      const formattedMessages = messages.map(msg => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content,
      }));

      const chatCompletion = await client.chatCompletion({
        model: "Qwen/Qwen2-7B-Instruct",
        messages: formattedMessages,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
      });

      const output = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

      console.log('Qwen2 response:', output);

      return {
        text: output.trim(),
      };
    } catch (error) {
      console.error('Qwen2 API error:', error);
      
      // Type guard to check if error has a message property
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      // Handle specific error types
      if (errorMessage.includes('Rate limit')) {
        return {
          text: "I'm receiving too many requests right now. Please try again in a moment.",
        };
      } else if (errorMessage.includes('unauthorized') || errorMessage.includes('authentication')) {
        return {
          text: "There's an authentication issue. Please check the API configuration.",
        };
      } else if (errorMessage.includes('model')) {
        return {
          text: "The AI model is currently unavailable. Please try again later.",
        };
      }
      
      // Fallback response
      return {
        text: "I'm currently experiencing technical difficulties. Please try again later.",
      };
    }
  },

  async doGenerate(params: {
    prompt: any;
    mode: { type: string };
    [key: string]: any;
  }) {
    // Convert prompt to messages format if needed
    const messages = Array.isArray(params.prompt) 
      ? params.prompt 
      : [{ role: 'user', content: params.prompt }];
    
    const result = await this.generate(messages);
    
    return {
      text: result.text,
      usage: { promptTokens: 0, completionTokens: 0 },
      finishReason: 'stop' as const,
      rawCall: { rawPrompt: params.prompt, rawSettings: {} },
    };
  },

  async doStream(params: {
    prompt: any;
    mode: { type: string };
    [key: string]: any;
  }) {
    // For now, implement a simple non-streaming version
    const result = await this.doGenerate(params);
    
    return {
      stream: new ReadableStream({
        start(controller) {
          controller.enqueue({
            type: 'text-delta',
            textDelta: result.text,
          });
          controller.enqueue({
            type: 'finish',
            finishReason: 'stop',
            usage: result.usage,
          });
          controller.close();
        },
      }),
      rawCall: result.rawCall,
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
        'chat-model': qwen2ChatModel, // Switched to Qwen2
        'chat-model-reasoning': wrapLanguageModel({
          model: qwen2ChatModel, // Switched to Qwen2
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': qwen2ChatModel, // Switched to Qwen2
        'artifact-model': qwen2ChatModel, // Switched to Qwen2
      },
      imageModels: {},
    });
