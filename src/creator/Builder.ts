import path from "path";

import { MicroApp } from "@/constants";
import TemplateData from "@/modifier/TemplateData";
import { ReactConverter } from "@/modifier/converters";
import Downloader from "@/downloader/Downloader";

type AppItem = {
  name: string;
  repository: string;
  appPath?: string;
  isMain?: boolean;
};

const microConfigs: { [key: number]: AppItem } = {
  [MicroApp.STATIC_APP]: {
    name: "micro-app-static",
    repository: "git@github.com:a1029563229/micro-app-react-template.git",
  },
  [MicroApp.VUE_APP]: {
    name: "micro-app-vue",
    repository: "git@github.com:a1029563229/micro-app-vue-template.git",
  },
  [MicroApp.REACT_APP]: {
    name: "micro-app-react",
    repository: "git@github.com:a1029563229/micro-app-react-template.git",
  },
  [MicroApp.ANGULAR_APP]: {
    name: "micro-app-angular",
    repository: "git@github.com:a1029563229/micro-app-angular-template.git",
  },
};

type DownloadFn = (appName: string) => Promise<any>;
class Builder {
  mainApp: MicroApp;
  microApps: MicroApp[];
  apps: AppItem[] = [];

  constructor(mainApp: MicroApp, microApps: MicroApp[]) {
    this.mainApp = mainApp;
    this.microApps = microApps;
    this.init();
  }

  private init() {
    const mainAppConfig = {
      ...microConfigs[this.mainApp],
      isMain: true,
      appPath: path.resolve(__dirname, microConfigs[this.mainApp].name),
    };
    // const microAppConfigs = this.microApps.this.apps.push();
  }

  // private getDownloadFn(app: MicroApp): DownloadFn {}

  public build() {
    // this.downloadApps();
    // const { appPath } = this;
    // const reactConverter = new ReactConverter(appPath);
    // const templateData = new TemplateData(true);
    // reactConverter.setRewriter(new Rewriter(templateData));
    // reactConverter.buildMainApp();
  }
}
