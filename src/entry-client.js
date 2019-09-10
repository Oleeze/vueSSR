import { createApp } from './main.js';

// client-specific bootstrapping logic...

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})