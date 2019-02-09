require('..')(
  ['-n', 5, '-c', 1, 'https://www.github.com/alternatex/hey2node'],
  (msg) => console.log(msg),
  (code) => console.log(code)
);