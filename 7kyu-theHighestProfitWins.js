//Write a function that returns both the minimum and maximum number of the given list/array.

/**
 * Parameters - an array of numbers
 * Return - an array with min and maximum value from array
 * Examples
 * [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
 *  Assumptions
    All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
 * Pseudocode
    so we dont need to check for length as there will always be at least one number and our function will always get an array or a list so we dont have to check for null undefined or similar.
    so if there's only one number then max and min are same

 */
function minMax(arr){
    //declared variables for minimum and max and set default to first element in given array
    let min = arr[0]
    let max=arr[0]
    //do a for loop
    for(let i=0;i<arr.length;i++){
       
        if(arr[i]<min){
            min=arr[i]  //check for min and assign to min
        }if(arr[i]>max){
            max=arr[i]  //check for max and assing to max
        }
    }
    return [min,max]; // returns min and max array
}