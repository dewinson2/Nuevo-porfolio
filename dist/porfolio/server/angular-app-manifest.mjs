
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
    'index.csr.html': {size: 27507, hash: '614416fd15756b10cf84be454301b4994a7334e414b3a5afae962fe436ec34da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9186, hash: 'd604898945461d3d4fd280490c53082abf8fbdd561c748a9ab06d231f0cb08e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Nav/index.html': {size: 36321, hash: '61400eb81010077e29b8e665c10c28185c11cd976398a1dc36049980ed65fa25', text: () => import('./assets-chunks/Nav_index_html.mjs').then(m => m.default)},
    'index.html': {size: 48490, hash: '2ca64ed6f5ad112dfcb022b9855770c47ae342707c9002b656dfde1c0feb7dca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMSHDLC.css': {size: 39181, hash: 'CYOjlA1rOxY', text: () => import('./assets-chunks/styles-CVMSHDLC_css.mjs').then(m => m.default)}
  },
};
