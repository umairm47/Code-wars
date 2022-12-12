/*
In this kata Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

/**
 * Parameters - a string
 * Return - a string
 * Examples
 * Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
 * Pseudocode
   first split the string based on spaces
   then use the map method to capitalize the first letter of each word
   then join the new array with first letter capitalized
 */
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
} 

