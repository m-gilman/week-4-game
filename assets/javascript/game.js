//FUTURE IMPROVEMENTS:
// * add sound to clicks... I have found a few ways of doing this online, but they don't seem very efficient. When I tried them, the sound wouldn't work everytime. I'm still researching this before I add it. 
// * Stop css pseudoclasses after a win/loss, so that it looks like buttons can't be clicked until you click "Play Again"
// * Make a win / loss more obvious. Maybe make the winLoseMsg container div Expand over and in front of the the other elements on the page briefly. 
// * Develop a way to turn on and turn off "helpers" or "hints" ... As each crystal is clicked, have the value of it fade into focus in front of the crystal and then fade out as it's clicked... 

// "document.ready" makes sure JavaScript doesn't run until HTML doc is finished loading.
$(document).ready(function () {
//GAME SETUP
    // VARIABLES
    var yourScore = 0;
    var yourWins = 0;
    var yourLosses = 0;
    var targetNumber = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;

    //cache DOM selectors....
    var game = {
        displayScore: $("#displayScore"),
        displayGoal: $("#displayGoal"),
        displayWins: $("#displayWins"),
        displayLosses: $("#displayLosses"),
        winLoseMsg: $("#winLoseMsg"),
        crystalWrapper: $(".crystalWrapper"),
        resetWrapper: $(".resetWrapper"),
    }
        
    //RANDOM NUMBER GENERATOR FOR CRYSTALS
    function generateRandomTo12 () {
        return Math.floor(Math.random ()*12)+1;
    }

    //SET GOAL & CRYSTALS TO RANDOM NUMBERS
    function setRandoms () {
    // "Your Goal". Should be should be between 19 - 120
    targetNumber = Math.floor(Math.random ()*(102)+19);
    //Random numbers for each crystal between 1 - 12
    gem1 = generateRandomTo12 ();    //PINK GEM
    gem2 = generateRandomTo12 ();    //TEAL GEM
    gem3 = generateRandomTo12 ();    //PURPLE GEM
    gem4 = generateRandomTo12 ();    //BLUE GEM
    }
    //START -Reset all targetNumber and all gems to random values
    setRandoms ();

    //Because all games should have a way to cheat...
    console.log("Pink=" + gem1 + "   Teal=" + gem2 + "   Purple=" + gem3 + "   Blue=" + gem4);
    

    // ***FUNCTIONS
    // Inserts/Replaces current "Your Score" value (starting at 0) with value assigned by crystal at HTML location of #displayScore
    function editYourScore () {
        game.displayScore.text(yourScore);
    }
    // Inserts/Replaces current "Your Goal" value at location of #displayGoal
    function editYourGoal () {
        game.displayGoal.text(targetNumber);
    }
    // Inserts/Replaces current "Wins" & "Losses" value at location of #displayWins and #displayLosses respectively
    function editWinsLosses () {
        game.displayWins.text(yourWins);
        game.displayLosses.text(yourLosses);
    }

    // Fill in stats at the start of the game
    function fillStats () {
        editYourScore ();  //call function to replace "Your Score" with current value
        editYourGoal ();   //call function to replace "Your Goal" with current value
        editWinsLosses (); //call function to replace "Wins" & "Losses" with current values
    }

    fillStats ();

    // Conditional statement for score changes 
    function checkForWinsLosses () {
        if (yourScore === targetNumber) {
            //increase win count
            yourWins ++;
            //change score on screen
            editWinsLosses ();
            //display winning message
            game.winLoseMsg.addClass("transparantBg");
            game.winLoseMsg.html("<h1>Look at you!! <br>You Won!!!</h1>");
            game.crystalWrapper.off("click");
        } else if (yourScore > targetNumber) {
            yourLosses ++;
            editWinsLosses ();
            //display losing message
            game.winLoseMsg.addClass("transparantBg");
            game.winLoseMsg.html("<h1>I'm sorry! <br>You lost. </h1>");
            game.crystalWrapper.off("click");
        }  
    }
    

//clicking on the crystals 
function clickingCrystals () {
game.crystalWrapper.on("click", "#pinkImg", function(){
        yourScore += gem1;
        editYourScore();
        checkForWinsLosses ();
    }).on("click", "#tealImg", function () {
        yourScore += gem2;
        editYourScore();
        checkForWinsLosses ();
    }).on("click", "#purpleImg", function () {
        yourScore += gem3;
        editYourScore();
        checkForWinsLosses ();
    }).on("click", "#blueImg", function () {
        yourScore += gem4;
        editYourScore();
        checkForWinsLosses ();
    });
}
clickingCrystals ();

//clicking on "Play Again" Button
    game.resetWrapper.on("click", ".againButton", function(){
        yourScore = 0;
        setRandoms ();
        fillStats ();
        game.winLoseMsg.removeClass("transparantBg");
        game.winLoseMsg.html("<h1></h1>");
        clickingCrystals ();
        console.log("Pink=" + gem1 + "   Teal=" + gem2 + "   Purple=" + gem3 + "   Blue=" + gem4);
    });
    
}); //ends the "document.ready" code