require("module-alias/register");

import path from "path";
import commander from "commander";
const { program } = commander;

import pkg from "../package.json";
import Creator from "./creator";
import Modifier from "./modifier";
import { ReactConverter, Rewriter } from "./modifier";
import TemplateData from "./modifier/rewriters/TemplateData";

program
  .version(pkg.version, "-v, --version")
  .command("create <app-name>")
  .description("create a new project powered by micro-front-cli")
  .action((appName: string) => {
    const creator = new Creator(appName);
    creator.create();

    // const appPath = path.resolve(__dirname, "../templates/micro-app-react");
    // const reactConverter = new ReactConverter(appPath);
    // const templateData = new TemplateData(true);
    // reactConverter.setRewriter(new Rewriter(templateData));
    // reactConverter.buildMainApp();
  });

program.parse(process.argv);
