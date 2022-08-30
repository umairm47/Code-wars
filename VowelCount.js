//Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces.

/**
 * Parameters - string
 * Return - number
 * Examples
 *   assert.strictEqual(getCount("abracadabra"), 5) ;
 * Note: if there is nothing to sum, the sum is default to 0.
 * Pseudocode
    first i need to declare a variable for counting and set it to 0.
    Then I need to create a for loop to traverse through the string.
    Then for each element of the string I would check if it is one of the vowels using an if statement with or.
    if it is then it would add 1 to the variable count 
    at the end I would have return count.

 */
    function getCount(str) {
        let count =0;
        for(let i =0; i<str.length; i++)
          if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' ||str[i] === 'u' )
            count +=1
        return count;
      }