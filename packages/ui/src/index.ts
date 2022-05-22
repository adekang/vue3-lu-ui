// import type { App } from "vue";
// import * as components from "./components";

// export default {
//   install(app: App) {
//     for (const component in components) {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       const Comp = components[component];
//       if (Comp.install) app.use(Comp);
//     }
//     return app;
//   },
// };

// 方案二
export { default } from './preset'
export { default as create } from './create'
export * from './components'
export { default as version } from './version'
