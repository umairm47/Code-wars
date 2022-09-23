/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

/**
 * Parameters - an array
 * Return - an array
 * Examples
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 * Pseudocode
   use a for loop or the forEach method to traverse through the array. then compare each element with the three outcomes and the current value to determine what the output should be. 
   Afterwards return the value. initial value is "Nothing"

 */
function filter_list(l) {
    let filterarray= l.filter(elem =>{
    return typeof elem == "number"
    })
    return filterarray
}