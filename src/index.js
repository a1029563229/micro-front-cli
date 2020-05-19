const { program } = require("commander");

const package = require("../package.json");
const create = require("./create");

program
  .version(package.version, "-v, --version")
  .command("create <app-name>")
  .description("create a new project powered by micro-front-cli")
  .action((name) => {
    create(name);
  });

program.parse(process.argv);
