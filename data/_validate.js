const fs = require('fs');
try {
  const data = JSON.parse(fs.readFileSync('D:\\wwwroot\\web-tool-vite-spa\\public\\data\\china-openclaw.json', 'utf8'));
  console.log('JSON验证通过!');
  console.log('产品总数:', data.length);
  console.log('最新ID:', data[data.length - 1].id);
  console.log('---');
  data.forEach(p => console.log(p.id + '. ' + p.name + ' (' + p.developer + ')'));
} catch (e) {
  console.log('JSON验证失败:', e.message);
}
