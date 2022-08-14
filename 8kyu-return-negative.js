//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/**
 * Parameters - a number
 * Return - a negative number
 * Examples
 *  makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


 *  Assumptions
    You can assume that you are only given numbers.
    
 * Pseudocode
    use an if statement to test if given number is already negative otherwise multiple it by -1 and return it
 */
    function makeNegative(num) {
        return(num<0 ? num: num*(-1))
      }