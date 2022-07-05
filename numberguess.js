"use strict";
//alert("connected");

//create event listener for click event of button
document.getElementById("check").addEventListener("click", checkGuess);
document.getElementById("start").addEventListener("click", newGame);

//declare variables
let pickedNumber = 0;
const maxTries = 10;
let count = 0;
let gameover = false;

//call function to start game
newGame();

//create function 
function checkGuess(){
    //verify it is connected properly
    //alert("check");
    let message = "";
    
    //get the user's guess from the textbox
    const userGuess = parseInt(document.getElementById("guess").value);
    console.log("userGuess is " + userGuess);
    console.log("type is " + typeof(userGuess));

    //compare guess to pickedNumber
    if (pickedNumber == userGuess){
        message = "Correct!";
        //signal that I won
        gameover = true;
        //re-enable new game button
        document.getElementById("start").disabled = false;
    }
    else if (userGuess < pickedNumber){
        message = "Too low";
    }
    else{
        message = "Too high";
    }
    //increment counter
    count++;  //same as count = count + 1;  count += 1;
    //console.log("message is " + message);
    //check if I am out of tries
    if (count == maxTries && gameover == false){
        message = "Sorry, out of turns.  The number was " + pickedNumber;
        document.getElementById("start").disabled = false;
    }
    else if (count < maxTries && !gameover){
        //tell me how many tries are left
        document.getElementById("count").textContent = (maxTries - count) + " tries left";
    }

    
    //display message of "correct" or "not correct"
    document.getElementById("msg").textContent = message;
}//end checkGuess

function newGame(){
    console.log("new game");
    document.getElementById("start").disabled = true;
    //pick a number
    //generate random number between 1 and 100
    pickedNumber = 1 + Math.floor(Math.random() * 100);
    //console.log("pickedNumber is " + pickedNumber);
    //reset variables
    count = 0;
    gameover = false;
    document.getElementById("count").textContent = "";

    
}
