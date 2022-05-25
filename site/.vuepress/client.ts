import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import uiDesign from '@adekang/lu-ui'
import '@adekang/lu-ui/style'

export default defineClientConfig({
  enhance({ app }) {
    app.use(uiDesign)
  }
})
