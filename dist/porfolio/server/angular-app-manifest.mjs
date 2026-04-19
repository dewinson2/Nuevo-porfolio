
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Nav"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27448, hash: '468383ce61a0d3428bd03fb4b77079420ac154cac8c80b6816d42bc13cb1d5af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9127, hash: '9174f24c4ac19a9def2dfd40a20785d1d6e5b86963667eb82f9b8d88d77a0664', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Nav/index.html': {size: 36225, hash: 'd729d4016cfff738016fcef31243a54d4424e24c492890dd5eae95f98ef4400c', text: () => import('./assets-chunks/Nav_index_html.mjs').then(m => m.default)},
    'index.html': {size: 48355, hash: 'ab78b905261e71c3a66ff4ef962bf474e33534ed5cdc0e878b2cce4b808742e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EEWGG7AY.css': {size: 39157, hash: 'Pcqu2ba9Ch8', text: () => import('./assets-chunks/styles-EEWGG7AY_css.mjs').then(m => m.default)}
  },
};
