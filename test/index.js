const port = 9999;
const server = require('http').createServer((req, res) => {
  cs++;
  res.end();
}).listen(port);

let n = 10,
    cs = 0,
    cp = 0;

describe('hey2node', function(){
  it('should work', function(){
    return new Promise(function(resolve, reject){
      require('..')(
        ['-n', n, '-c', 1, `http://localhost:${port}`],
        (msg, handle) => cp++,
        (code) => { code==0 ? resolve(cs==cp && cs==n) : reject(code); server.close(); }
      );
    }).should.be.resolvedWith(true);
  })
});