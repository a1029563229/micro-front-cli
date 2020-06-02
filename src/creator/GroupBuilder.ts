import path from "path";
import shell from "shelljs";
import downloader from "@/downloader";
import { MicroApp } from "@/constants";
import { Rewriter } from "@/modifier";
import { getWorkDir } from "@/utils";

export default class GroupBuilder {
  private appName: string;

  constructor(appName: string) {
    this.appName = appName;
  }

  /**
   * 构建主板
   */
  public async build(): Promise<any> {
    const appName = this.appName;
    await downloader.downloadGroupTemplate(appName);
    shell.cd(appName);
    shell.exec("yarn", { silent: true });
    shell.cd("..");
    return Promise.resolve();
  }

  /**
   * 根据微应用重写部分文件（主要是 package.json）
   */
  public async rewrite(microApps: MicroApp[]): Promise<any> {
    const rewriter = new Rewriter({ apps: microApps });
    await rewriter.rewriteDir(path.join(getWorkDir(), this.appName));
    return Promise.resolve();
  }
}
