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
    label: "Doubao-pro-32k/240828",
    apiIdentifier: "Doubao-pro-32k/240828",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "Doubao-pro-256k/240828",
    label: "Doubao-pro-256k/240828",
    apiIdentifier: "Doubao-pro-256k/240828",
    description: "For complex, multi-step tasks",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "Doubao-pro-32k/240828";
