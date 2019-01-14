const raw = require('fs').readFileSync(__dirname + '/../build/index.html', 'utf8');
const jsesc = require('jsesc');

module.exports = function(content, data = {}) {
  let esc = jsesc(data, {
    isScriptContext: true,
    json: true
  });
  let dataNode = `<script>window.__ssrData__ = ${esc};</script>`;
  return raw.replace('<div id="root"></div>', `${dataNode}<div id="root">${content}</div>`);
}