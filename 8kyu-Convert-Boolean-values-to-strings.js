//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

/**
 * Parameters - a boolean
 * Return - a string
 * Examples
 *   assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
 * Pseudocode
    take a boolean and return a yes if the boolean is true else return a no
 */
    function boolToWord( bool ){
        if(bool===true)
          return "Yes"
        return "No"
      }