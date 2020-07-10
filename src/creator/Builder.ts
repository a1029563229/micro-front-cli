import path from "path";

import { getWorkDir } from "@/utils";
import { MicroApp } from "@/constants";
import TemplateData from "@/modifier/rewriters/TemplateData";
import {
  Converter,
  ReactConverter,
} from "@/modifier/converters";
import downloader from "@/downloader";
import { Rewriter } from "@/modifier";

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
    ConverterConstructor: ReactConverter,
  },
  [MicroApp.VUE_APP]: {
    name: "micro-app-vue",
    repository: "git@github.com:a1029563229/micro-app-vue-template.git",
    ConverterConstructor: ReactConverter,
  },
  [MicroApp.REACT_APP]: {
    name: "micro-app-react",
    repository: "git@github.com:a1029563229/micro-app-react-template.git",
    ConverterConstructor: ReactConverter,
  },
  [MicroApp.ANGULAR_APP]: {
    name: "micro-app-angular",
    repository: "git@github.com:a1029563229/micro-app-angular-template.git",
    ConverterConstructor: ReactConverter,
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

  /**
   * 构建主应用和所有微应用
   */
  public async build(): Promise<any> {
    await this.downloadApps();

    const apps = this.apps;
    const buildFns: Promise<any>[] = [];
    for (let i = 0; i < apps.length; i++) {
      const app = apps[i];
      const { appPath, isMain, ConverterConstructor } = app;
      const converter: Converter = new ConverterConstructor(appPath!);
      const templateData = new TemplateData(isMain);
      converter.setRewriter(new Rewriter(templateData));
      if (isMain) {
        buildFns.push(converter.buildMainApp());
      } else {
        buildFns.push(converter.buildMicroApp());
      }
    }
    await Promise.all(buildFns);
    
    return Promise.resolve();
  }

  private async downloadApps(): Promise<any> {
    const apps = this.apps;
    await Promise.all(
      apps.map((app) =>
        downloader.downloadAppTemplate(app.repository, app.name)
      )
    );
    return Promise.resolve();
  }
}
