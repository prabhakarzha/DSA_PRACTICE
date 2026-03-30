function countKeys(obj, result = {}) {
  for (let key in obj) {
    // count key
    result[key] = (result[key] || 0) + 1;

    // if nested object → recursion
    if (typeof obj[key] === "object" && obj[key] !== null) {
      countKeys(obj[key], result);
    }
  }
  return result;
}

const input = { a: 1, b: { a: 2, c: { a: 3 } } };
console.log(countKeys(input));

// output = { a: 3, b: 1, c: 1 }
