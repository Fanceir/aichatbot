import { openai, createOpenAI } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

// 这个函数通过中间件包装 OpenAI 模型，创建一个自定义模型
export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier), // 确保 'apiIdentifier' 是有效的，并与模型名称匹配
    middleware: customMiddleware, // 使用自定义中间件，拦截或修改请求
  });
};

const provider = createOpenAI({
  name: "ep-20241022215045-mvfsg",
  apiKey: process.env.OPENAI_API_KEY ?? "",
  baseURL: "https://ark.cn-beijing.volces.com/api/v3",
});

// 使用自定义模型函数
const customAIModel = customModel("ep-20241022215045-mvfsg"); // 替换为实际的模型标识符
