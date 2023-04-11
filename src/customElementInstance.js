import { defineCustomElement, createApp, getCurrentInstance, h } from 'vue'

export const createElementInstance = ({
  component = null,
  sharedStoreInstance = false,
  plugins = []
} = {}) => {
  return defineCustomElement({
    setup() {
      const app = createApp()

      if (!sharedStoreInstance) {
        plugins.forEach((plugin) => app.use(plugin))
      }

      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
    render: () => h(component)
  })
}
