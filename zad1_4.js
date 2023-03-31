const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  const query = url.parse(req.url, true).query;
  const a = parseFloat(query.a);
  const b = parseFloat(query.b);
  const c = parseFloat(query.c);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    res.end('Nieprawidłowe wartości boków trójkąta');
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    res.end('Nie można zbudować trójkąta o podanych wartościach boków');
  } else {

    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let info  = `Pole powierzchni trójkąta o bokach ${a}, ${b}, ${c} wynosi ${area.toFixed(2)}`;
    res.end(info);
  }
}).listen(3000);
