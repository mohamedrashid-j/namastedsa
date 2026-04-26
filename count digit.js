function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let n = 1992929;
let result = countDigits(n);
console.log(result);
