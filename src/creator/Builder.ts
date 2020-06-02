import path from "path";

import { getWorkDir } from "@/utils";
import { MicroApp } from "@/constants";
import TemplateData from "@/modifier/rewriters/TemplateData";
import {
  Converter,
  ReactConverter,
  StaticConverter,
  VueConverter,
  AngularConverter,
} from "@/modifier/converters";
import Downloader from "@/downloader/Downloader";

type AppItem = {
  name: string;
  repository: string;
  appPath?: string;
  isMain?: boolean;
  ConverterConstructor?: any;
};

const microConfigs: { [key: string]: AppItem } = {
  [MicroApp.STATIC_APP]: {
    name: "micro-app-static",
    repository: "git@github.com:a1029563229/micro-app-react-template.git",
    ConverterConstructor: StaticConverter,
  },
  [MicroApp.VUE_APP]: {
    name: "micro-app-vue",
    repository: "git@github.com:a1029563229/micro-app-vue-template.git",
    ConverterConstructor: VueConverter,
  },
  [MicroApp.REACT_APP]: {
    name: "micro-app-react",
    repository: "git@github.com:a1029563229/micro-app-react-template.git",
    ConverterConstructor: ReactConverter,
  },
  [MicroApp.ANGULAR_APP]: {
    name: "micro-app-angular",
    repository: "git@github.com:a1029563229/micro-app-angular-template.git",
    ConverterConstructor: AngularConverter,
  },
};

// type DownloadFn = (appName: string) => Promise<any>;
export default class Builder {
  mainApp: MicroApp;
  microApps: MicroApp[];
  apps: AppItem[] = [];

  constructor(mainApp: MicroApp, microApps: MicroApp[]) {
    console.log({ mainApp, microApps });
    this.mainApp = mainApp;
    this.microApps = microApps;
    this.init();
    console.log(this.apps);
  }

  private init() {
    const workDir = getWorkDir();
    const mainAppConfig = {
      ...microConfigs[this.mainApp],
      name: "micro-app-main",
      isMain: true,
      appPath: path.resolve(workDir, microConfigs[this.mainApp].name),
    };
    const microAppConfigs: AppItem[] = this.microApps.map(
      (microApp) =>
        ({
          ...microConfigs[microApp],
          isMain: false,
          appPath: path.resolve(workDir, microConfigs[microApp].name),
        } as AppItem)
    );

    this.apps = [mainAppConfig, ...microAppConfigs];
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
