const { program } = require("commander");

const package = require("../package.json");
const create = require("./create");

program.version(package.version).usage("<command> [options]");

program
  .command("create <app-name>")
  .description("create a new project powered by micro-front-cli")
  .action((name) => {
    create(name);
  });

program.parse(process.argv);
