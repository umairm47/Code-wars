//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.



/**
 * Parameters - a string
 * Return - a string
 * Examples
 *  'acb' --> 'bca'
*   'aabacbaa' --> 'bbabcabb'
 * Pseudocode
   do a for loop and go through and change each a to b and b to a
   so first I would split the string to individual letter
   then i would check if its an a or b and then change it accordingly.

 */
function switcheroo(x){
    let arr=x.split('') 
        for(let i=0; i<x.length; i++){
            if(arr[i]==='a'){arr[i]='b'}
            else if(arr[i]==='b'){arr[i]='a'}
        }
    return(arr.join(''))
}