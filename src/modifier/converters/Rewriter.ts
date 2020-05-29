import path from "path";
import fs, { stat, writeFile } from "fs";
import Handlebars from "handlebars";

import { detectExist } from "@/utils";

export default class Rewriter {
  private dir: string = "";
  private rewriteFilesPath: string = "";
  private templateData: any = {};

  constructor(templateData: any) {
    this.templateData = templateData;
  }

  /**
   * 重写 overrides 目录下的文件
   */
  public async rewriteDir(dir: string, rewriteFilesPath?: string) {
    this.dir = dir;
    this.rewriteFilesPath = rewriteFilesPath || path.join(dir, "./overrides");
    if (!detectExist(this.rewriteFilesPath)) {
      throw new Error(`overrides 目录 - ${this.rewriteFilesPath} 不存在！`);
    }

    await this.rewriteFiles();
  }

  private async rewriteFiles() {
    const rewriterDir = this.rewriteFilesPath;
    const files = this.readFiles(rewriterDir);

    const rewriteFns: Promise<any>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      rewriteFns.push(this.geRewriteFileFn(file));
    }

    await Promise.all(rewriteFns);
  }

  private readFiles(entry: string): string[] {
    let files: string[] = [];
    const fileOrDirs = fs.readdirSync(entry);
    for (let i = 0; i < fileOrDirs.length; i++) {
      const fileOrDir = fileOrDirs[i];
      const absPath = path.join(entry, fileOrDir);

      const statInfo = fs.statSync(absPath);
      if (statInfo.isDirectory()) {
        files = [...files, ...this.readFiles(absPath)];
      } else if (fileOrDir.endsWith(".hb")) {
        files.push(absPath.slice(this.rewriteFilesPath.length));
      }
    }
    return files;
  }

  private geRewriteFileFn(file: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const templateFile = path.join(this.rewriteFilesPath, file);
      const overrideFile = path.join(this.dir, file.slice(0, file.length - 3)); // 截取尾缀

      fs.readFile(templateFile, "utf-8", (err, data) => {
        if (err) return reject(err);

        // 重写文件
        const template = Handlebars.compile(data);
        const overrideData = template(this.templateData);
        fs.writeFile(overrideFile, overrideData, "utf-8", (err) => {
          if (err) return reject(err);

          resolve();
        });
      });
    });
  }
}
