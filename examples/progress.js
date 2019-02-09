const requests = 10;

const ProgressBar = require('cli-progress').Bar;
const progressBar = new ProgressBar();

progressBar.start(requests, 0);

let i = 0;

require('..')(
  ['-n', requests, '-c', 1, 'https://www.github.com/alternatex/hey2node'],
  (msg) => progressBar.update(++i),
  (code) => progressBar.stop()
);