// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "grok-beta",
    label: "grok-beta",
    apiIdentifier: "grok-beta",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "grok-vision-beta",
    label: "grok-vision-beta",
    apiIdentifier: "grok-vision-beta",
    description: "For complex, multi-step tasks",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "grok-beta";
