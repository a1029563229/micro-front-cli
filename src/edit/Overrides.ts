import path from "path";
import handlebars from "handlebars";

import { detectExist } from "@/src/utils";

export default class Overrides {
  private dir: string = "";
  private overridesPath: string = "";
  private templateData: any = {};

  /**
   * 设置模板数据
   */
  public setTemplateData(templateData: any) {
    this.templateData = templateData;
  }

  /**
   * 重写 overrides 目录下的文件
   */
  public overridesDir(dir: string, overridesPath?: string) {
    this.dir = dir;
    this.overridesPath = overridesPath || path.join(dir, "./overrides");
    if (!detectExist(this.overridesPath)) throw new Error(`overrides 目录 - 不存在！`);
  }
}
