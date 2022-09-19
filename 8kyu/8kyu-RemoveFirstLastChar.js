//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/**
 * Parameters - a string
 * Return - a truncated string
 * Examples
 *  assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');


 *  Assumptions
    You can assume that you are only given a string
    
 * Pseudocode
    use the built in string method "slice" to splice the string
 */
   

function removeChar(str){
    return str.slice(1,str.length-1)
   
   };