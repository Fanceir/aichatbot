"use server";

import { type CoreUserMessage, generateText } from "ai";
import { cookies } from "next/headers";

import { customModel } from "@/lib/ai";

export async function saveModelId(model: string) {
  const cookieStore = await cookies();
  cookieStore.set("model-id", model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: CoreUserMessage;
}) {
  const { text: title } = await generateText({
    model: customModel("grok-beta"),
    system: `\n
    - 你将根据用户开始对话的第一条消息生成一个简短的标题
    - 确保标题不超过80个字符
    - 标题应是用户消息的摘要
    - 不要使用引号或冒号`,
    prompt: JSON.stringify(message),
  });

  return title;
}
