// start pattern -  Inorder to run it replace all let to var

/** 
 * 
 *  ****
 *  ****
 *  ****
 *  ****
 * 
 *  i < n | j < n
 * 
**/ 

let n = 4;

for (let i = 0; i < n; i++) {
    let row = ' ';
    for ( let j = 0; j < n; j++) {
        row += '* ';
    }
    console.log(row)
}


/** 
 * 
 *  *
 *  **
 *  ***
 *  ****
 *  
 *  i < n | j = i+1 / j <= i
 * 
**/ 

let n = 4;

for (let i = 0; i < n; i++) {
    let row = '';
    for ( let j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row)
}


/** 
 * 
 *  1
 *  12
 *  123
 *  1234
 *  12345 
 * 
**/ 


let n = 5;

for (let i = 0; i < n; i++) {
    let row = ``;
    for (let j = 0; j <= i; j++) {
        row += `${j+1} ` 
    }
    console.log(row)
}


/** 
 * 
 *  1
 *  22
 *  333
 *  4444
 *  55555 
 * 
**/ 

let n = 5;

for (let i = 0; i < n; i++) {
    let row = ``;
    for (let j = 0; j <= i; j++) {
        row += `${i + 1} `
    }
    console.log(row)
}


/** 
 * 
 *  12345
 *  1234
 *  123
 *  12
 *  1
 * 
 *  another possibility 
 *  i < n | j < n - i
 * 
 *  *****
 *  ****
 *  ***
 *  **
 *  *
 * 
 * same solution but print * instead of j/j+1
 * 
**/ 

// my solution
let n = 5;

for (let i = n; i >= 1; i--) {
    let row = ``;
    for (let j = 1; j <= i; j++) {
        row += `${j} `;
    }
    console.log(row)
}

// solution of j < n - i 
let n = 5;

for (let i = 0; i < 5; i++) {
    let row = ``;
    for (let j = 0; j < n - i; j++) {
        row += `${j+1} `;
    }
    console.log(row)
}


/** 
 * 
 *      *
 *     **
 *    ***
 *   ****
 *  *****
 * 
**/ 


let n = 5;

for (let i = 0; i < n; i++) {
    let row = ``;
    for (let j = 0; j < n-(i+1); j++) {
        row += `  `;
    }
    for (let k = 0; k < i+1; k++){
        row += ' *';
    }
    console.log(row)
}

// complicated way but acheived it
let n = 5;

for (let i = n; i > 0; i--) {
    let row = ``;
    for (let j = i-1; j > 0; j--) {
        row += `  `;
    }
    for (let k = 0; k < n-(i-1); k++){
        row += ' *';
    }
    console.log(row)
}

/** 
 * 
 *  1
 *  10
 *  101
 *  1010
 *  10101
 *  101010
 * 
**/ 

let n = 6;

for (let i = 0; i < 6; i++) {
    let value = true;
    let row = '';
    for (let j = 0; j < i + 1; j++){
        row += `${!value ? 0 : 1}`;
        value = !value;
    }
    console.log(row)
}
