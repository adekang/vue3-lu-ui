import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import uiDesign from 'lu-ui'
import 'lu-ui/style'

export default defineClientConfig({
  enhance({ app }) {
    app.use(uiDesign)
  }
})
