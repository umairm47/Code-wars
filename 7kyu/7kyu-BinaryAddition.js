//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.The binary number returned should be a string.






/**
 * Parameters - a number in base 10
 * Return - a string in base 2
 * Examples
 *   1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
*    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
 * Pseudocode
   add the two numbers and use the built in method toString to convert it into a string and also change the base to 2

 */
function addBinary(a,b) {
    return (a+b).toString(2)
   }