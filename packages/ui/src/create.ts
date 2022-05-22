import type { App } from 'vue'
import version from './version'
export * from './components'

type ComponentType = any

export interface LUiInstance {
  version: string
  componentPrefix: string
  install: (app: App) => void
}

interface LUiCreateOptions {
  components?: ComponentType[]
  componentPrefix?: string
}

const create = ({
  componentPrefix = 'L',
  components = [],
}: LUiCreateOptions = {}): LUiInstance => {
  const installTargets: App[] = []
  console.log(components)

  const registerComponent = (
    app: App,
    name: string,
    component: ComponentType,
  ): void => {
    const registered = app.component(componentPrefix + name)
    if (!registered) app.component(componentPrefix + name, component)
  }

  const install = (app: App): void => {
    if (installTargets.includes(app)) return
    installTargets.push(app)
    components.forEach((component) => {
      const { name, alias } = component
      registerComponent(app, name, component)
      if (alias) {
        alias.forEach((aliasName: string) => {
          registerComponent(app, aliasName, component)
        })
      }
    })
  }

  return {
    version,
    componentPrefix,
    install,
  }
}

export default create
