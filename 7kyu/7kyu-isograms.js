//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.




/**
 * Parameters - an array
 * Return - a boolean
 * Examples
 *   "Dermatoglyphics" --> true
 *   "aba" --> false
 *   "moOse" --> false (ignore letter case)
 * Pseudocode
   I need to convert the array to lowercase then split it into individual letters
   I can then sort the array and make sure that each element is unique by just comparing each element with the one next to it.

 */
function isIsogram(str){
    let arr=str.toLowerCase()
    let arrSplit=arr.split('')
    arrSplit.sort()
    
    for (let i=0; i<arrSplit.length-1; i++){
        if(arrSplit[i]==arrSplit[i+1]) return false
        
    }
    return true
}