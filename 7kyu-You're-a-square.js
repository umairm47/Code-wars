//Given an integral number, determine if it's a square number:In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//The tests will always use some integral number, so don't worry about that in dynamic typed languages.




/**
 * Parameters - a number
 * Return - a boolean
 * Examples
 *   -1  =>  false
 *    0  =>  true
 *    3  =>  false
 *    4  =>  true
 *    25  =>  true
 *    26  =>  false
 *    -2 => false
 * Pseudocode
  Check if its a negative number or if the square root of a number is an integer if thats not the case then return false
  otherwise return true.

 */

var isSquare = function(n){
  if(n<0 ||Math.sqrt(n)%1!==0)return false; 
  return true;
}
