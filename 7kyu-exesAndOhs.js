//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.






/**
 * Parameters - a string
 * Return - a boolean
 * Examples
 *   XO("ooxx") => true
 *   XO("xooxx") => false
 *   XO("ooxXm") => true
 *   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 *   XO("zzoo") => false
 * Pseudocode
    So I would start by declaring two variables to sum the x and o. then make sure all the letters are the same case by applying the toLowerCase() method on the string.
    Then using a for loop i would traverse through the string and compare each letter and see if its an x or an o and then add that to the relevant sum.
    Once the for loop completes I would put my return statement. The return statement would return the result of if sum of x is equal to sum of o.
    

 */
function XO(str) {
    let sumo=0
    let sumx=0
    let smallstr=str.toLowerCase()
    for(let i=0;i<smallstr.length; i++){
        if(smallstr[i]==='x'){
        sumx += 1
        }else if (smallstr[i] ==='o'){
        sumo +=1
        }
    }
    return sumx === sumo
    }
