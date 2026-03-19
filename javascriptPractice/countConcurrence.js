// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: { apple: 3, banana: 2, orange: 1 }
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countConcurrence(arr) {
  let count = {};

  arr.forEach((element) => {
    if (count[element]) {
      count[element] = count[element] + 1;
    } else {
      count[element] = 1;
    }
  });
  return count;
}

console.log(countConcurrence(arr));
