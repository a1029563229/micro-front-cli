const shell = require("shelljs");

function downloadQsTemplate(appName) {
  return new Promise((resolve, reject) => {
    shell.exec(
      `git clone git@github.com:a1029563229/micro-front-template.git -b master ${appName}`,
      { silent: true }
    );
    shell.cd(appName)
    shell.rm("-rf", "micro-app-react-communication");
    shell.rm("-rf", "micro-app-vue-communication");
    resolve();
  });
}

module.exports = {
  downloadQsTemplate,
};
