import commander from "commander";
const { program } = commander;

import pkg from "../package.json";
import Creator from "./creator";

program
  .version(pkg.version, "-v, --version")
  .command("create <app-name>")
  .description("create a new project powered by micro-front-cli")
  .action((appName: string) => {
    const creator = new Creator(appName);
    creator.create();
  });

program.parse(process.argv);
