import { MicroApp } from "@/constants";

type MicroAppItem = {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
};

const microConfigs: { [key: string]: MicroAppItem } = {
  [MicroApp.STATIC_APP]: {
    name: "MicroStaticApp",
    entry: "//localhost:10400",
    container: "#frame",
    activeRule: "/static",
  },
  [MicroApp.VUE_APP]: {
    name: "VueStaticApp",
    entry: "//localhost:10200",
    container: "#frame",
    activeRule: "/vue",
  },
  [MicroApp.REACT_APP]: {
    name: "ReactStaticApp",
    entry: "//localhost:10100",
    container: "#frame",
    activeRule: "/react",
  },
  [MicroApp.ANGULAR_APP]: {
    name: "ReactStaticApp",
    entry: "//localhost:10300",
    container: "#frame",
    activeRule: "/angular",
  },
};

export default class TemplateData {
  public isMain: boolean = false;

  public hasExternals: boolean = false;
  public externals: string = "";
  public microApps?: MicroAppItem[] = [];

  constructor(isMain: boolean = false) {
    this.isMain = isMain;
    this.parseTemplateData();
  }

  private parseTemplateData() {
    const { isMain } = this;
    if (isMain) {
      this.hasExternals = true;
      this.externals = [`"nprogress": "^0.2.0"`, `"qiankun": "^2.0.11"`].join(
        `, \n    `
      );
    }
  }

  /**
   * 注入微应用
   */
  public injectMicroApps(apps: MicroApp[]) {
    this.microApps = apps.map((app) => microConfigs[app]);
  }
}
