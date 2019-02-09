module.exports = function(args, message, close){
  let proc = require('child_process').spawn(__dirname + '/hey', args, {
    stdio: ['ignore', 'ignore', 'ignore', 'ipc']
  });
  proc.on('message', (msg, handle) => message(msg));
  proc.on('close', (code) => close(code));
};