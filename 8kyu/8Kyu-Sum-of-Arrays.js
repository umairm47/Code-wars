//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
/**
 * Parameters - a boolean
 * Return - a string
 * Examples
 *  Input: [1, 5.2, 4, 0, -1]
    Output: 9.2

    Input: []
    Output: 0

    Input: [-2.398]
    Output: -2.398
 *  Assumptions
    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.
 * Pseudocode
    create a variable called sum, test for special case 
    and then check for the case when theres numbers.
    so i will need to first declare a variable to store the sum
    then do an if statement to check for special case when array
    is of 0 length.
    if thats false then we do a for loop to get the sum of numbers and then return the sum.
 */
function sum (numbers) {
    let sum = 0
    if (numbers.length===0){
        return 0
    }
    for (let i =0; i<numbers.length;i++){
        sum +=numbers[i]
    }
    return sum
    
    
};
