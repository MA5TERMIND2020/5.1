/*
These variables keep track of the player's total wins and losses during a single session.
*/

var result = null
var countWins = 0
var countLosses = 0

/*
This function creates a random number between 1 and 6, then checks to see if the number is even or odd. Finally, it updates the text on the
 web page to say "You Win" if the number was even and "You Lose" if the number was odd.
*/

function playGame() {
    var num1 = Math.ceil(Math.random()*6);
    var num2 = Math.ceil(Math.random()*6);
    if (num1 % 2 == 0 || num2 % 2 == 0) {
        if (num1 % 2 == 0 && num2 % 2 == 0){
            document.getElementById("updateDiv").innerHTML = num1 + " AND " + num2 + " are both Even! You Win the Jackpot!!!";
            result = true;
            scoreKeeper(result);
        }
        else if (num1 % 2 == 0) {
            document.getElementById("updateDiv").innerHTML = num1 + " is Even! You Win!!!";
            result = true;
            scoreKeeper(result);
        }
        else {
            document.getElementById("updateDiv").innerHTML = num2 + " is Even! You Win!!!";
            result = true;
            scoreKeeper(result);
        }
    //document.getElementById("updateDiv").innerHTML = num1 + " is Even! You Win!!!";
    //result = true;

    //scoreKeeper(result);
    }
    else {
        document.getElementById("updateDiv").innerHTML = "You rolled a " + num1 + " AND a " + num2 + ". Sorry, You Lose :(";
        result = false
        scoreKeeper(result);
    }
  }

  /*
This function takes in result of the game expressed as a boolean value and updates the player's Win/Loss ratio accordingly.
It then displays the player's Win/Loss ratio in the browser window.
*/
function scoreKeeper(boolean) {
    if (boolean == true) {
        countWins++
    }
    else{
        countLosses++
    }
    document.getElementById("updateDiv2").innerHTML = "Your Win/Loss ratio is:" + countWins + ":" + countLosses;
}
