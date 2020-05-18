const path = require("path");
const slash = require("slash");
const boxen = require("boxen");

const generate = require("./generate");

const create = async (app) => {
  // const options = await generate();
  const cwd = process.cwd();
  const dirPath = slash(path.resolve(cwd, app));
  // console.log(options);
  console.log(dirPath);

  const boxMessage = boxen("Micro front initial success!", {
    padding: 1,
    borderStyle: "classic",
    backgroundColor: "green",
  });
  console.log(boxMessage);
};

module.exports = create;
