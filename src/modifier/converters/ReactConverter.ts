import path from "path";
import Converter from "./Converter";
import Rewriter from "../rewriters/Rewriter";

export default class ReactConverter extends Converter {
  private appPath: string = "";
  private rewriterPath: string = "";

  private rewriter!: Rewriter;

  constructor(appPath: string) {
    super();
    this.appPath = appPath;
    this.rewriterPath = path.join(appPath, "./overrides");
  }

  /**
   * 设置重写对象
   */
  public setRewriter(rewriter: Rewriter) {
    this.rewriter = rewriter;
  }

  /**
   * 构建主应用代码
   */
  public buildMainApp(): Promise<any> {
    return new Promise(async (resolve) => {
      await this.rewriter.rewriteDir(this.appPath, this.rewriterPath);
      this.rewriter.deleteOverrides();
      resolve();
    });
  }

  /**
   * 构建微应用代码
   */
  public buildMicroApp(): Promise<any> {
    return new Promise(async (resolve) => {
      await this.rewriter.rewriteDir(this.appPath, this.rewriterPath);
      this.rewriter.deleteOverrides();
      resolve();
    });
  }
}
