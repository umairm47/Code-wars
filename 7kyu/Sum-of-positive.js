//You get an array of numbers, return the sum of all of the positives ones.

/**
 * Parameters - an array of numbers
 * Return - sum of positive numbers in the array
 * Examples
 *   Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * Note: if there is nothing to sum, the sum is default to 0.
 * Pseudocode
    I would declare a variable called sum which would be used to store the addition of the values in the array.

 */
function positiveSum(arr) {
  let sum=0
  for (let i =0; i<arr.length; i++){
    if (arr[i]>0){
      sum +=arr[i]
      }
  }
  return sum
}