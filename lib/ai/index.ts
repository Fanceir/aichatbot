import { xai } from "@ai-sdk/xai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: xai(apiIdentifier),
    middleware: customMiddleware,
  });
};
