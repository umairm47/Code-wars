/*
There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.
/**
 * Parameters - a string
 * Return - a string
 * Examples
 * nextPal(11) == 22
 * nextPal(188) == 191
 * nextPal(191) == 202
 * nextPal(2541) == 2552
 * Pseudocode
   Use a do while loop and increment the given number 1 and reverse the new number and see if its a palindrome. if not then we keep going with the while loop.*/
   function nextPal(val) {

    do {
      val++;
    } while(!isPalindrome(val))
    return val;
  
  
  function isPalindrome(num) {
    return num === parseInt(num.toString().split('').reverse().join(''));
  }
  
  
  }
