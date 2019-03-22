function *main() {
  console.log('Accessing intellectual brain');
  const x = 10 + (yield);
  console.log('Brain processing simulation', x);
  const y = 20 + (yield);

  console.log('Meaning of life', x + y);
}


const iterator = main();

/* start the iterator */
iterator.next();
/* start after the 1st yield */
iterator.next(1);
/* start after the 2nd yield */
iterator.next(11);
