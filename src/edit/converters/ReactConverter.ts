import path from "path";
import Converter from "./Converter";
import Overrides from "../Overrides";

export default class ReactConverter extends Converter {
  private appPath: string = "";
  private overridesPath: string = "";

  private overrides!: Overrides;

  constructor(appPath: string) {
    super();
    this.appPath = appPath;
    this.overridesPath = path.join(appPath, "./overrides");
  }

  public setOverrides(overrides: Overrides) {
    this.overrides = overrides;
  }

  /**
   * 构建主应用代码
   */
  public buildMainApp() {
    this.overrides.overridesDir(this.appPath, this.overridesPath);
  }

  /**
   * 构建微应用代码
   */
  public buildMicroApp() {
    this.overrides.overridesDir(this.appPath, this.overridesPath);
  }
}
