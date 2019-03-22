console.log('A');

setTimeout(function () {
  console.log('B');
});

const p = new Promise(function (resolve, reject) {
  console.log('C');
});

p.then(function() {
  console.log('D');
});

console.log('E');
