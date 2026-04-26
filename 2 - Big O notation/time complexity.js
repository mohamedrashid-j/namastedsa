/**
 *  Time complexity
 * 
 * It is used to measure efficiency of algorithm in terms of speed, as the input size grows
 * 
 * Time Complexity != Time taken (Machine, configuration of machine and language)
 * 
 */


// ! Important ->  Speed Efficiency -> when input size grows

/**
 * 
 * linear search | Binary search
 * 
 * 
 * Linear search - [2,1,3,5,4,7]
 * 
 * In order to search(5)
 * then it starts with 2,1,3,5 its found
 * it will run n times
 * 
 * for eg 100 elements -> it will run 100 times
 *  
 * 
 * Binary search - [1,3,4,7,9,10,15]
 * 
 * - it will be sorted for sure that means binary search
 * - In order to search (10)
 * - it will find the middle element which is 7
 * - then find the element on the right side because 10 is greater than 7 -> [9,10,15]
 * - it will find the middle element and it will find the 10 and it will be finalized
 * - if not the same process follows
 * - it will run n, n/2, n/4.....    
 * ----- n / 2*x = 1 -> x is no of times dividing the array
 * ----- n = 2*x
 * ----- log2 n = x -> log of n base 2
 * 
 * lets say for eg 100 elements then -> 100, 50, 25, 12, 6, 3, 1
 * 
 * 
 * */ 


/**
 * 
 * Big O notation - always consider the worst case
 * 
 *  O(n) - linear - for loop, O(log n) - Binary search, O (n log n ) - merge sort, O (n*2) - nested for, O(n*3) - nested for 
 *  O(1) - constant
 *  
 * > O(1) > O (log n) > O (n) > O (n log n) 
 * > O (n**2) > O (2**n) > O (n!)
 * 
 */



