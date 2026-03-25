
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
    'index.csr.html': {size: 20983, hash: '4e491de4691054c2355c413f4ec304037d446863101ffa209a61d7a5072d7ae3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1625, hash: 'acbd3ea5fd234a27e122aa126a11dd322dd3b1dd80229978cf52f8a5fe7a4925', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Nav/index.html': {size: 29504, hash: 'd4ecd49336e2e28da8fabd586d32d61469ab49b8be839ce44bfb7fe1e6fab93c', text: () => import('./assets-chunks/Nav_index_html.mjs').then(m => m.default)},
    'index.html': {size: 63058, hash: '13a5407429f0c1c26d59f8a06966fa0cee918aa408f40e58664180655c379cb6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GX2JODZY.css': {size: 37477, hash: 'jeipCkUTXeI', text: () => import('./assets-chunks/styles-GX2JODZY_css.mjs').then(m => m.default)}
  },
};
