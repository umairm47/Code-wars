//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.





/**
 * Parameters - a string with a name
 * Return - initials from the name
 * Examples
 *   Sam Harris => S.H
 *   patrick feeney => P.F
 * Pseudocode
    split the name string based on the space character
    then further split each string to individual letters
    then take the first element of each split string and return it

 */
function abbrevName(name){
    let arr = name.split(' ')
    let fname=arr[0].split('')
    let lname=arr[1].split('')
    return `${fname[0].toUpperCase()}.${lname[0].toUpperCase()}`
    
        
    
    }