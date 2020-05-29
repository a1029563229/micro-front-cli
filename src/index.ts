const { program } = require("commander");

const pkg = require("../package.json");
const create = require("./create");

program
  .version(pkg.version, "-v, --version")
  .command("create <app-name>")
  .description("create a new project powered by micro-front-cli")
  .action((appName: string) => {
    create(appName);
  });

program.parse(process.argv);
