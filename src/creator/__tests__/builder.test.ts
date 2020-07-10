import path from "path";
import shell from "shelljs";

import Builder from "../Builder";
import { GenerateOptions } from "@/generator";
import { getWorkDir, setWorkDir } from "@/utils";
import { MicroApp } from "@/constants";

test("Test use builder to build MainReactApp And MicroReactApp", async () => {
  const recordWorkDir = getWorkDir();

  setWorkDir(path.join(shell.pwd().toString(), "./test-templates"));
  shell.cd(getWorkDir());

  const options: GenerateOptions = {
    isDefault: false,
    mainApp: MicroApp.REACT_APP,
    microApps: [MicroApp.REACT_APP],
  };

  const builder = new Builder(options.mainApp!, options.microApps!);
  await builder.build();

  shell.cd(recordWorkDir);
  setWorkDir(recordWorkDir);
}, 3000000);
