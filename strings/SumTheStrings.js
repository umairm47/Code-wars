/*In this kata Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

/**
 * Parameters - an array
 * Return - an array
 * Examples
 * "4",  "5" --> "9"
 * "34", "5" --> "39"
 * Pseudocode
   first I would convert string to an int
   then add them
   then convert it back to a string
 */
   function sumStr(a,b) {
    return (Number(a)+Number(b)).toString()
  }


