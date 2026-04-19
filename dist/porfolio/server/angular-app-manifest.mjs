
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
    'index.csr.html': {size: 27507, hash: '715e63c6ec27d859f90ea2c1627a6bb300364dde7088830165dc0ed6cc1a2980', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9186, hash: '4008a01488811dc453e0400e94ca1647bbd610e161e171390305fbf63cee4871', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Nav/index.html': {size: 36284, hash: '5b4b49430f17e49f26141ea8ba51ecaf91f12e2b8d5a8552c48d8aabf7e36d07', text: () => import('./assets-chunks/Nav_index_html.mjs').then(m => m.default)},
    'index.html': {size: 48414, hash: '9beaa8f5d4da2510ecb7939258e1e57cbaa76cdae12088f74a55145c2293b0d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CPDF34MG.css': {size: 38967, hash: 'TftEx4Ah4f8', text: () => import('./assets-chunks/styles-CPDF34MG_css.mjs').then(m => m.default)}
  },
};
