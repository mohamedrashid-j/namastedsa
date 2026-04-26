// in order to get the last digit in an number then use mod of 10
// n % 10

// In order to remove the last digit divide the number by 10
// n / 10

// palindrome number
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x < 0) return false;

    let y = x;
    let rev = 0;

    while (y > 0) {

        let rem = y % 10;
        rev = (10 * rev) + rem;
        y = Math.floor(y / 10);

    }

    return x === rev;

};
