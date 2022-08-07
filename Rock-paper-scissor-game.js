//Let's play! You have to return which player won! In case of a draw return Draw!.



/**
 * Parameters - a boolean
 * Return - a string
 * Examples
 *   Examples(Input1, Input2 --> Output):
 * "scissors", "paper" --> "Player 1 won!"
 * "scissors", "rock" --> "Player 2 won!"
 * "paper", "paper" --> "Draw!"
 * Pseudocode
    if player one wins player two loses if player 1 and two have the same thing
    then its a draw
    Rules: 
    Rock beats scissors
    Scissors beats Paper
    Paper beats Rock
 */
const rps = (p1, p2) => {
    if ((p1.toLowerCase()=="rock" && p2.toLowerCase()=="scissors") || (p1.toLowerCase()=="scissors" && p2.toLowerCase()=="paper") || (p1.toLowerCase()=="paper" && p2.toLowerCase()=="rock")){
        return "Player 1 won!"
        
    }
    
    else if (p1.toLowerCase()===p2.toLowerCase()){
        return "Draw!"
    }else{
    return "Player 2 won!"
    }
}

