import './promise-polyfill';
import { app } from './app';

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('./pwa');
}

app.$mount('#app');
