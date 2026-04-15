function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let l1 = num1.length;
  let l2 = num2.length;

  // result array
  let res = new Array(l1 + l2).fill(0);

  let pf = 0; // power factor

  for (let i = l2 - 1; i >= 0; i--) {
    let ival = num2[i] - '0';

    let j = l1 - 1;
    let k = res.length - 1 - pf;
    let carry = 0;

    while (j >= 0 || carry !== 0) {
      let jval = j >= 0 ? num1[j] - '0' : 0;
      j--;

      let prod = ival * jval + carry + res[k];

      res[k] = prod % 10;
      carry = Math.floor(prod / 10);
      k--;
    }

    pf++;
  }

  // remove leading zeros
  let result = "";
  let flag = false;

  for (let val of res) {
    if (val === 0 && flag === false) {
      continue;
    } else {
      flag = true;
      result += val;
    }
  }

  return result.length === 0 ? "0" : result;
}


