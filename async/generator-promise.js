function getData(val) {
  return new Promise(function (resolve) {
    resolve(val);
  });
}

function *main() {
  console.log('Accessing intellectual brain');
  const x = 10 + (yield getData(1));
  console.log('Brain processing simulation');
  const y = 20 + (yield getData(11));

  console.log('Meaning of life', (yield getData(x + y)));
}

const iterator = main();

iterator.next().value.then(function (val1) {
  iterator.next(val1).value.then(function (val2) {
    iterator.next(val2).value.then(function (val3) {
      iterator.next(val3);
    });
  });
});

/* function runnerUtil(generatorFn) {
 *   const it = generatorFn();
 *
 *   function handleNext(val) {
 *     const temp = it.next(val);
 *     if (temp.value && typeof temp.value.then === 'function') {
 *       temp.value.then(handleNext);
 *     }
 *   }
 *
 *   handleNext();
 * }
 *
 * runnerUtil(main); */
