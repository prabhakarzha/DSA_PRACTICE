console.log(a);
console.log(foo());
var a = 1;
function foo() {
  return 2;
}

console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve()
  .then(() => console.log("promise1"))
  .then(() => console.log("promise2"));
console.log("end");

async function f() {
  console.log("a");
  await null;
  console.log("b");
}
console.log("start");
f();
console.log("end");

function add(a, b) {
  return this.x + a + b;
}
const obj = { x: 10 };
console.log(add.call(obj, 1, 2));
console.log(add.apply(obj, [1, 2]));
console.log(add.bind(obj, 1)(2));
