import inquirer from "inquirer";
import { MicroApp } from "@/constants";

const stacks = [
  {
    name: "Vue2",
    value: MicroApp.VUE_APP,
  },
  {
    name: "React16",
    value: MicroApp.REACT_APP,
  },
  {
    name: "Angular9",
    value: MicroApp.ANGULAR_APP,
  },
  {
    name: "ES6",
    value: MicroApp.ES6_APP,
  },
  {
    name: "Static",
    value: MicroApp.STATIC_APP,
  },
];
export default class Generator {
  /**
   * 选择预设
   */
  public async pickPreset() {
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
  }

  /**
   * 选择主应用技术栈 - 单选
   */
  public async pickMainApp() {
    const options = await inquirer.prompt({
      name: "mainApp",
      type: "list",
      message: "Please choose the MainApp stack",
      choices: stacks,
    });
    return options.mainApp;
  }

  /**
   * 选择微应用技术栈 - 多选
   */
  public async checkMicroApps() {
    const options = await inquirer.prompt({
      name: "microApps",
      type: "checkbox",
      message: "Please Check the microApps that you need:",
      choices: stacks,
    });
    return options.microApps;
  }
}
