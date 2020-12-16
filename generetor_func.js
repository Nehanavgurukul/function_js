function* generator(i) {
    yield i;
    yield i + 1;
  }const gen = generator(1);
  console.log(gen.next().value);



  // expected output: 1console.log(gen.next().value);
  // expected output: 2