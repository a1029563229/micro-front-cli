import shell from "shelljs";

export default class Downloader {
  /**
   * 下载 QuickStart 模板
   */
  public downloadQsTemplate(appName: string) {
    return new Promise((resolve, reject) => {
      shell.exec(
        `git clone git@github.com:a1029563229/micro-front-template.git -b master ${appName}`,
        { silent: true }
      );
      shell.cd(appName);
      shell.rm("-rf", "micro-app-react-communication");
      shell.rm("-rf", "micro-app-vue-communication");
      resolve();
    });
  }

  /**
   * 下载 QuickStart 模板
   */
  public downloadGroupTemplate(appName: string) {
    return new Promise((resolve, reject) => {
      shell.exec(
        `git clone git@github.com:a1029563229/micro-app-group-template.git -b master ${appName}`,
        { silent: true }
      );
      resolve();
    });
  }

  /**
   * 下载 App 模板
   */
  public downloadAppTemplate(
    repository: string,
    appName: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      shell.exec(`git clone ${repository} -b master ${appName}`, {
        silent: true,
      });
      resolve();
    });
  }
}
