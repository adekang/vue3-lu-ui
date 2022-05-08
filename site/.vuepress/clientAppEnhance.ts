import { defineClientAppEnhance } from "@vuepress/client";
// @ts-ignore
import luUI from "lu-ui";

export default defineClientAppEnhance(({ app }) => {
  app.use(luUI);
});
