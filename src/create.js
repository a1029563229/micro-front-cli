const path = require("path");
const chalk = require("chalk");
const shell = require("shelljs");
const slash = require("slash");
const boxen = require("boxen");
const ora = require("ora");

const generate = require("./generate");
const { downloadQsTemplate } = require("./download");

const detectExists = () => {
  const cwd = process.cwd();
  const dirPath = slash(path.resolve(cwd, app));
  const isExist = shell.test("-e", dirPath);
  if (isExist) {
    console.error(`The app named app is existed.`);
    return shell.exit(1);
  }

  return false;
}

const echoSuccessMsg = () => {
  const boxMessage = boxen(
    `
    ${chalk.blue(`Micro front initial success!
    Please run the following command.
    `)}\n
    ${chalk.green(`cd ${app}
    yarn examples:install
    yarn examples:start`)}
  `,
    {
      padding: { right: 5 },
      borderStyle: "classic",
      borderColor: "green",
    }
  );
  console.log(boxMessage);
};

const create = async (app) => {
  if (detectExists(app)) return;

  const options = await generate();
  const spinner = ora("正在下载模板...");
  spinner.start();
  // if (options.isDefault) await downloadQsTemplate(app);

  spinner.succeed();

  console.log(options);
  console.log(dirPath);
  echoSuccessMsg();
};

module.exports = create;
