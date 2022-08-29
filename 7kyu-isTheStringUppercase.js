//Create a method to see whether the string is ALL CAPS.




/**
 * Parameters - a string
 * Return - a boolean
 * Examples
 *   "c" -> False
 *   "C" -> True
 *   "hello I AM DONALD" -> False
 *   "HELLO I AM DONALD" -> True
 *   "ACSKLDFJSgSKLDFJSKLDFJ" -> False
 *   "ACSKLDFJSGSKLDFJSKLDFJ" -> True
 * Pseudocode
   I would convert one copy of the string to all capital and then compare the capital string with the original and return the result. if they are equal then the result would be true. if not then the result will be false.

 */
   String.prototype.isUpperCase = function() {
    return this.toUpperCase()===this.toString();
  }