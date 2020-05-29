import path from "path";
import Converter from "./Converter";
import Rewriter from "./Rewriter";

export default class ReactConverter extends Converter {
  private appPath: string = "";
  private rewriterPath: string = "";

  private rewriter!: Rewriter;

  constructor(appPath: string) {
    super();
    this.appPath = appPath;
    this.rewriterPath = path.join(appPath, "./overrides");
  }

  public setRewriter(rewriter: Rewriter) {
    this.rewriter = rewriter;
  }

  /**
   * 构建主应用代码
   */
  public buildMainApp() {
    this.rewriter.rewriteDir(this.appPath, this.rewriterPath);
  }

  /**
   * 构建微应用代码
   */
  public buildMicroApp() {
    this.rewriter.rewriteDir(this.appPath, this.rewriterPath);
  }
}
