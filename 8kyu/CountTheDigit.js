/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.




*/





/**
 * Parameters - integers
 * Return - integer
 * For example n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
 * Assumptions:
 *  

 * Pseudocode
    go through and square the numbers for each n and convert it to a string and add it to an array.
    then traverse through each element in the array and within each element and look for the number of d value.
    in the end return the total count of d value.

 */

function nbDig(n, d) {
    d = d.toString()
    arr = []
    for(i=0; i<=n; i++){
        num = i*i
        arr.push(num.toString())
    }

    counter = 0
    for(i=0; i<=arr.length-1; i++){
        // console.log(arr[i], typeof arr[i])
        for(j=0; j<=arr[i].length-1; j++){
            // console.log(arr[i][j])
            if(arr[i][j] == d){
                counter++
            }
        }
    }
  return counter
  }