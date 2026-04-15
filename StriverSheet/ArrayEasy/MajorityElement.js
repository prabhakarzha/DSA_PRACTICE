// Better approach not optimal
let arr = [2, 2, 1, 1, 1, 2, 2];
function MajorityElement(arr) {
  let count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > arr.length / 2) {
      return num;
    }
  }
}
console.log(MajorityElement(arr));

// optimal approach

let arr = [2, 2, 1, 1, 1, 2, 2];
function MajorityElement(arr) {
  let count = 0;
  let element = null;

  for (let num of arr) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (num === element) {
      count++;
    } else {
      count--;
    }
  }

  return element;
}
console.log(MajorityElement(arr));
