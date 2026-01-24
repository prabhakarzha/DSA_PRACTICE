// myFun();

// var myFun = function () {
//   console.log("First");
// };

// myFun();

// function myFun() {
//   console.log("Second");
// }
// myFun();
// variable = 10;

// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 100;
//   variable = 20;
//   console.log(variable);
// })();
// console.log(foo);
// console.log(variable);
// var variable = 30;

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i));
}
