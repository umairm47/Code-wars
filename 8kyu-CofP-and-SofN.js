//Given an array of integers.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.If the input is an empty array or is null, return an empty array.

/**
 * Parameters - an array
 * Return - an array with count of positive elements and sum of negative
 * Examples
 *  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


 *  Assumptions
    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return an empty array.
 * Pseudocode
    create a variable for counting the number of sums and a variable for summing the negatives. then using a for loop traverse through the given array and sum the negatives and count the positives and then return an array.
 */
    function countPositivesSumNegatives(input) {
        let numPos=0
        let sumNeg=0
        //checks if the array is empty or is null the order of the if statement is important
        if(input===null || input.length===0){
          return []
        }
        for (let i =0; i<input.length; i++){
          if(input[i]<0){
            sumNeg +=input[i]
          }if (input[i]>0){
          numPos++
            }
        }
        return [numPos,sumNeg]
      }