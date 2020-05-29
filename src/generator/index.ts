import Generator from "./Generator";

export default Generator;

/**
 * 收集模板预设信息
 */
export const generateTemplate = async () => {
  const generator = new Generator();
  const preset = await generator.pickPreset();
  if (preset === "default") return { isDefault: true };

  const mainApp = await generator.pickMainApp();
  const microApps = await generator.checkMicroApps();
  return { isDefault: false, mainApp, microApps };
};
