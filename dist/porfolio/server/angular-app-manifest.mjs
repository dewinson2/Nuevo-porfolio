
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Nav"
  },
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 19872, hash: 'ddf55a160bf18f46b9ba902afc929a98a95f6923d3e745673db9b5b0e90f9e0d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '28a58212c11a4034cc675664ee7d6f1df1d260733c35983fbec5b23df141f0ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69663, hash: '980212f73cf1432be4fea31a2043fbcc686977727744705178f1468a281589ec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Nav/index.html': {size: 28296, hash: 'b16484c16c3d883c925b2611333d2c35de7193e5a5cefac8ed48d10e49ebb453', text: () => import('./assets-chunks/Nav_index_html.mjs').then(m => m.default)},
    'styles-7OB74AX3.css': {size: 34750, hash: 'BAxjNKpP+/c', text: () => import('./assets-chunks/styles-7OB74AX3_css.mjs').then(m => m.default)}
  },
};
