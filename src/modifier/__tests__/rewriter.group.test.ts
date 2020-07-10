import path from "path";
import shell from "shelljs";
import { Rewriter } from "@/modifier";
import { MicroApp } from "@/constants";

const groupTemplateDir = path.join(
  shell.pwd().toString(),
  "./templates/micro-app-group-template"
);

test("Test rewrite group template with one app", async () => {
  const groupRewriter = new Rewriter({
    apps: [MicroApp.REACT_APP],
  });
  await groupRewriter.rewriteDir(groupTemplateDir);
});

test("Test rewrite group template with all app", async () => {
  const groupRewriter = new Rewriter({
    apps: [MicroApp.REACT_APP, MicroApp.VUE_APP, MicroApp.STATIC_APP],
  });
  await groupRewriter.rewriteDir(groupTemplateDir);
});
