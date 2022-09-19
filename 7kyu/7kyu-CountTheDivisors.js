//Count the number of divisors of a positive integer n.Random tests go up to n = 500000.








/**
 * Parameters - a number
 * Return - a number
 * Examples
 *   4 --> 3 (1, 2, 4)
 *   5 --> 2 (1, 5)
 *   12 --> 6 (1, 2, 3, 4, 6, 12)
 *   30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
 * Pseudocode
    I would start by declaring a variable for counting the divisors
    then i would create a for loop and have it start from i =1 and traverse the i=n with increments of 1.
    the for loop will have an if statement to check if the remainder of number divided by i is 0 if so then add to the number of divisor variable.
    at the end i would return the sum.

 */
    function getDivisorsCnt(n){
        let num = 0
        for(let i=1; i<=n; i++){
          if(n%i == 0 ){
            num+=1
          }
        }
      return num;
    }