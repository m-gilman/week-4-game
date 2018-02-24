// "document.ready" makes sure JavaScript doesn't run until HTML doc is finished loading.
$(document).ready(function () {

// AUDIO
    // Sound that plays when you click on a crystal  
    var crystalAudio = $("#crystalButtonClick")[0];
    $(".crystal").click(function(){
        crystalAudio.play();
    });

    // Sound that plays when you click on the Play Again Button
    var iceAudio = $("#resetButtonClick")[0];
    $(".againButton").click(function(){
        iceAudio.play();
    });

//GAME VARIABLES
    var yourScore = 0;
    var yourWins = 0;
    var yourLosses = 0;
    var targetNumber = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    
    
    function resetGame () {
    // The Number that the user is shooting for... A.K.A. "Your Goal". It Should be should be between 19 - 120
    targetNumber = Math.floor(Math.random ()*(102)+19);
    //Random numbers for each crystal. Number should be between 1 - 12
    gem1 = Math.floor(Math.random ()*12)+1;    //PINK GEM
    gem2 = Math.floor(Math.random ()*12)+1;    //TEAL GEM
    gem3 = Math.floor(Math.random ()*12)+1;    //PURPLE GEM
    gem4 = Math.floor(Math.random ()*12)+1;    //BLUE GEM
    }   

    //Reset all targetNumber and all gems to random values
    resetGame ();


    console.log("Pink=" + gem1 + "   Teal=" + gem2 + "   Purple=" + gem3 + "   Blue=" + gem4);
    
    // ***FUNCTIONS
    // Inserts/Replaces current "Your Score" value (starting at 0) with value assigned by crystal at HTML location of #displayScore
    function editYourScore () {
        $("#displayScore").text(yourScore);
    }
    // Inserts/Replaces current "Your Goal" value at location of #displayGoal
    function editYourGoal () {
        $("#displayGoal").text(targetNumber);
    }
    // Inserts/Replaces current "Wins" & "Losses" value at location of #displayWins and #displayLosses respectively
    function editWinsLosses () {
        $("#displayWins").text(yourWins);
        $("#displayLosses").text(yourLosses);
    }

    // Conditional statement for score changes 
    function checkForWinsLosses () {
        if (yourScore === targetNumber) {
            //increase win count
            yourWins ++;
            //change score on screen
            editWinsLosses ();
            //display winning message
            $("#winLoseMsg").addClass("transarantBg");
            $("#winLoseMsg").html("<h1>Look at you!! <br>You Won!!!</h1>");
            $(".crystalWrapper").off("click");
        } else if (yourScore > targetNumber) {
            yourLosses ++;
            editWinsLosses ();
            //display losing message
            $("#winLoseMsg").addClass("transarantBg");
            $("#winLoseMsg").html("<h1>I'm sorry! <br>You lost. </h1>");
            $(".crystalWrapper").off("click");
        }  
    }

    // Fill in stats at the start of the game
    function fillStats () {
        editYourScore ();  //call function to replace "Your Score" with current value
        editYourGoal ();   //call function to replace "Your Goal" with current value
        editWinsLosses (); //call function to replace "Wins" & "Losses" with current values
    }

    fillStats ();

//clicking on the crystals 
function clickingCrystals () {
$(".crystalWrapper").on("click", "#pinkImg", function(){
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
    $(".resetWrapper").on("click", ".againButton", function(){
        yourScore = 0;
        resetGame ();
        fillStats ();
        $("#winLoseMsg").removeClass("transarantBg");
        $("#winLoseMsg").html("<h1></h1>");
        clickingCrystals ();
        console.log("Pink=" + gem1 + "   Teal=" + gem2 + "   Purple=" + gem3 + "   Blue=" + gem4);
    });
    
}); //ends the "document.ready" code