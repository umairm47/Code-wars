// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.


/**
 * Parameters - an array
 * Return - a string
 * Examples
 *  likeOrDislike([Dislike]) => Dislike
 *  likeOrDislike([Like,Like]) => Nothing
 *  likeOrDislike([Dislike,Like]) => Like
 *  likeOrDislike([Like,Dislike,Dislike]) => Nothing
 * Pseudocode
   use a for loop or the forEach method to traverse through the array. then compare each element with the three outcomes and the current value to determine what the output should be. 
   Afterwards return the value. initial value is "Nothing"

 */
// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let curval = "Nothing"
    buttons.forEach((element)=>{
      if ((element ==="Dislike") && (curval === "Nothing" || curval ==="Like")){
        curval = "Dislike"
      }else if ((element ==="Like") && (curval === "Nothing" || curval ==="Dislike")){
        curval = "Like"
      }else{
        curval = "Nothing"
      }
    })
    return curval ;
  }