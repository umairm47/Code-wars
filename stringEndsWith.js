//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

/**
 * Parameters - an array of numbers
 * Return - sum of positive numbers in the array
 * Examples
 *   solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 * Assumptions:
you will only get arrays or strings
 * Pseudocode
    get the length of the ending string then splice the original string from the ending array length element and compare it to the ending array and if it is true then return true else return false.
 */
function solution(str, ending){
    let endLength=ending.length
    if(str.slice(str.length-endLength)==ending){
        return true
    }
    return false
    }