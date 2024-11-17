import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai";
import {
  experimental_wrapLanguageModel as wrapLanguageModel,
  LanguageModel,
} from "ai";

import { customMiddleware } from "./custom-middleware";

type CustomModel = (
  apiIdentifier: string,
  baseURL?: string,
  apiKey?: string
) => LanguageModel;

export const customModel: CustomModel = (apiIdentifier, baseURL, apiKey) => {
  const openaiProvider: OpenAIProvider = createOpenAI({
    name: apiIdentifier,
    baseURL: baseURL || "https://ark.cn-beijing.volces.com/api/v3", // Default to OpenAI's base URL if none provided
    apiKey: apiKey || process.env.OPENAI_API_KEY || "", // Use provided API key or environment variable
  });

  return wrapLanguageModel({
    model: openaiProvider(apiIdentifier),
    middleware: customMiddleware,
  });
};
