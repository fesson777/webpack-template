async function start() {
  return Promise.resolve('async is working');
}

start().then(console.log);

const unused = 42;

class Util {
  static id = Date.now();
}

console.log('Util.is: ', Util.id);
console.log(unused);

const obj = {
  a: 1,
  b: 2,
  // c: {
  //   someProp: true,
  // },
};

const obj2 = { ...obj, d: 4 };
console.log('Object spreading is working');

if (!obj.c?.someProp) {
  console.log('Given obj has no "c" prop, optional chaining is working');
}

// Динамические импорты
import('lodash').then(_ => {
  console.log('Lodash: ', _.random(0, 42, true));
  console.log('Dynamic import is working');
});
