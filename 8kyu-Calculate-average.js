//rite a function which calculates the average of the numbers in a given list.

/**
 * Parameters - an array
 * Return - the average
 * Examples
 *  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


 *  Assumptions
    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.
 * Pseudocode
    create a variable for summing. sum all the numbers in the array and then divide it by the total number of elements to get your average
 */
function find_average(array) {
    if(array.length===0){
        return 0;
    }
    let sum=0
    const size=array.length
    for(let i=0;i<size;i++){
        sum +=array[i]
    }
    return sum/size
}      