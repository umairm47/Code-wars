//Simple, remove the spaces from the string, then return the resultant string.



/**
 * Parameters - a string
 * Return - a string
 * Examples
 *   assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 

 *  Assumptions
   you get a string
 * Pseudocode
    split the string from the spaces
    and then join the split strings
 */
function noSpace(x){
  return x.split(' ').join('')
}