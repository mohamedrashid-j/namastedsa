/**
 * @param {number} x
 * @return {number}
 */



/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let n = Math.abs(x);
    let rev = 0;

    while(n > 0) {

        let lastDigit = Math.floor(n % 10);
        rev = (10 * rev) + lastDigit;
        n = Math.floor(n / 10);

    }

    let limit = Math.pow(2,31); // 2**31
    if(rev < -limit || rev > limit) return 0;

    return x > 0 ? rev : -rev;
};


var reverse = function(x) {
    const isNegative = x < 0
    
    let digits = Math.abs(x).toString().split('')
    
    let reversed = digits.reverse().join('')
    
    let result = isNegative ? -Number(reversed) : Number(reversed)
    
    const MAX = Math.pow(2, 31) - 1
    const MIN = Math.pow(-2, 31)
    if (result > MAX || result < MIN) return 0
    
    return result
}