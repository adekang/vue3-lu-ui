import { defineClientAppEnhance } from '@vuepress/client'
// @ts-ignore
import uiDesign from 'lu-ui'
import 'lu-ui/style'

export default defineClientAppEnhance(({ app }) => {
  app.use(uiDesign)
})
