import path from "path";
import shell from "shelljs";
import { Rewriter } from "@/modifier";
import TemplateData from "../rewriters/TemplateData";

const reactAppTemplateDir = path.join(
  shell.pwd().toString(),
  "./templates/micro-app-react-template"
);

test("Test rewrite react template [Main app]", async () => {
  const templateData = new TemplateData(true);
  expect(templateData.isMain).toBeTruthy();

  const rewriter = new Rewriter(templateData);
  await rewriter.rewriteDir(reactAppTemplateDir);
});

// test("Test rewrite react template [Micro app]", async () => {
//   const templateData = new TemplateData(false);
//   expect(templateData.isMain).toBeFalsy();

//   const rewriter = new Rewriter(templateData);
//   await rewriter.rewriteDir(reactAppTemplateDir);
// });
