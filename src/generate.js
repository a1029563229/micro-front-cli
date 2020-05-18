const inquirer = require("inquirer");

/**
 * 选择模板
 */
const pickPreset = async () => {
  const options = await inquirer.prompt({
    name: "preset",
    type: "list",
    message: "Please pick a preset:",
    choices: [
      {
        value: "default",
        name: "QuickStart (Main - Vue, Micro - Vue、React、Angular、Static)",
      },
      {
        value: "manually",
        name: "Manually select",
      },
    ],
  });
  return options.preset;
};

/**
 * 选择主应用技术栈
 */
const pickMainApp = async () => {
  const options = await inquirer.prompt({
    name: "mainApp",
    type: "list",
    message: "Please choose the MainApp stack",
    choices: ["Vue2", "React16", "Angular9", "ES6", "Static"],
  });
  return options.mainApp;
};

/**
 * 选择嵌入的微应用
 */
const checkMicroApps = async () => {
  const options = await inquirer.prompt({
    name: "microApps",
    type: "checkbox",
    message: "Please Check the microApps that you need:",
    choices: ["Vue2", "React16", "Angular9", "ES6", "Static"],
  });
  return options.microApps;
};

const generate = async () => {
  const preset = await pickPreset();
  if (preset === "default") return { isDefault: true };

  const mainApp = await pickMainApp();
  const microApps = await checkMicroApps();
  return { isDefault: false, mainApp, microApps };
};

module.exports = generate;
