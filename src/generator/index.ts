import Generator from "./Generator";
import { MicroApp } from "@/constants";

export default Generator;

export type GenerateOptions = {
  isDefault: boolean;
  mainApp?: MicroApp;
  microApps?: MicroApp[];
};

/**
 * 收集模板预设信息
 */
export const generateTemplate = async (): Promise<GenerateOptions> => {
  const generator = new Generator();
  const preset = await generator.pickPreset();
  if (preset === "default") return { isDefault: true };

  const mainApp = await generator.pickMainApp();
  const microApps = await generator.checkMicroApps();
  return { isDefault: false, mainApp, microApps };
};
