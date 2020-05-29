import path from "path";
import chalk from "chalk";
import shell from "shelljs";
import slash from "slash";
import boxen from "boxen";
import ora from "ora";
import { detectExist } from "@/utils";

import { generateTemplate } from "../generator";
import downloader from "../downloader";

export default class Creator {
  private appName: string = "";

  constructor(appName: string) {
    this.appName = appName;
    this.detectAppDirExists();
  }

  public async create() {
    const options = await generateTemplate();

    const spinner = ora("正在下载模板...");
    spinner.start();
    if (options.isDefault) {
      await downloader.downloadQsTemplate(this.appName);
      spinner.succeed();
    }

    console.log(options);
    this.echoSuccessMsg();
  }

  private detectAppDirExists() {
    const cwd = process.cwd();
    const dirPath = slash(path.resolve(cwd, this.appName));
    const isExist = detectExist(dirPath);
    // 目录已存在 - 退出程序
    if (isExist) {
      console.error(`The app named app is existed.`);
      shell.exit(1);
    }
  }

  private echoSuccessMsg() {
    const boxMessage = boxen(
      `
      ${chalk.blue(`Micro front initial success!
      Please run the following command.
      `)}\n
      ${chalk.green(`cd ${this.appName}
      yarn examples:install
      yarn examples:start`)}
    `,
      {
        padding: { right: 5 },
        borderStyle: "classic",
        borderColor: "green",
      } as any
    );
    console.log(boxMessage);
  }
}
