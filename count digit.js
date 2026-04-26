var a = 0;

let count = 0;
let n = 129293939311;
while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}

console.log(count)