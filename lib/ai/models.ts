// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "Doubao-pro-32k/240828",
    label: "豆包基础版",
    apiIdentifier: "ep-20241022215045-mvfsg",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "Doubao-pro-256k/240828",
    label: "豆包加强版",
    apiIdentifier: "ep-20241117161603-w8qgj",
    description: "For complex, multi-step tasks",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "ep-20241117161603-w8qgj";
