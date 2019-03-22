const fs = require('fs');
const cache = {};

function zalgoRead(filename, cb) {
  const file = cache[filename];
  if (typeof file !== 'undefined') {
    console.log('reading from cache');
    return cb(null, file);

    /* return setTimeout(function () {
     *   cb(null, file);
     * }, 0); */
  }

  fs.readFile(filename, function (err, data) {
    if (err) {
      return cb(err, null);
    }

    cache[filename] = data;

    return cb(err, data);
  });
}

function reader(filename) {
  const listeners = [];

  zalgoRead(filename, function (err, data) {
    console.log('listeners size:', listeners.length);
    listeners.forEach(function(listener) {
      console.log('calling listener');
      listener(err, data);
    });
  });

  return {
    addListener: function (listener) {
      console.log('adding listener');
      listeners.push(listener);
    },
  };
}

reader('hello.txt').addListener(function (err, data) {
  console.log(`First read: ${data.toString('utf8')}`);

  reader('hello.txt').addListener(function (err, data) {
    console.log(`Second read: ${data.toString('utf8')}`);
  });
});
