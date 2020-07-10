import path from "path";
import shell from "shelljs";
import Creator from "@/creator";
import { MicroApp } from "@/constants";
import { detectExist } from "@/utils";

test("Main process", async () => {
  const testTemplatesDir = path.join(shell.pwd().toString(), "./test-templates");
  if (detectExist(testTemplatesDir)) {
    shell.rm("-rf", testTemplatesDir);
  }

  const creator = new Creator("test-templates");
  await creator.createByOptions({
    isDefault: false,
    mainApp: MicroApp.REACT_APP,
    microApps: [MicroApp.REACT_APP],
  });
}, 3000000);
