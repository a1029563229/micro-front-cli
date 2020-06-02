import Creator from "@/creator";
import { MicroApp } from "@/constants";

test("Main process", () => {
  const creator = new Creator("test-templates");
  creator.createByOptions({
    isDefault: false,
    mainApp: MicroApp.REACT_APP,
    microApps: [MicroApp.REACT_APP],
  });
});
