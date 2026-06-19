// خادم محلي بسيط لتشغيل المشروع عبر http بدل file://
// شغّله بـ:  node _serve.js   ثم افتح http://localhost:8000
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let fp = path.join(root, p);
  if (!fp.startsWith(root)) { res.writeHead(403); return res.end('403'); }
  fs.readFile(fp, (e, d) => {
    if (e) { res.writeHead(404); return res.end('404 Not Found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(d);
  });
}).listen(8010, () => console.log('serving TALABAKTAM-NEW on http://localhost:8010  (admin: http://localhost:8010/admin/)'));
