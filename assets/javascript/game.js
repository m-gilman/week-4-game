// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
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

    // The Number that the user is shooting for... A.K.A. "Your Goal". It Should be should be between 19 - 120
    var targetNumber = Math.floor(Math.random ()*(102)+19);
    //Random numbers for each crystal. Number should be between 1 - 12
    var gem1 = Math.floor(Math.random ()*12)+1;    //PINK GEM
    var gem2 = Math.floor(Math.random ()*12)+1;    //TEAL GEM
    var gem3 = Math.floor(Math.random ()*12)+1;    //PURPLE GEM
    var gem4 = Math.floor(Math.random ()*12)+1;    //BLUE GEM
    

    console.log("Pink=" + gem1 + "   Teal=" + gem2 + "   Purple=" + gem3 + "   Blue=" + gem4);
    

    // FUNCTIONS

    // Inserts new score into HTML at location of #displayScore
    function editYourScore () {
        $("#displayScore").text(yourScore);
    }

    // function whatsTheScore () {}
    if (yourScore === targetNumber) {
        yourWins ++;
    } else if (yourScore > targetNumber) {
        yourLosses ++;
    }  
    // else {
    //     yourScore =+ crystalValue;
    //     // i don't have a crystalValue yet
    // }



    // Fill in stats at the start of the game
    editYourScore ();  //calling the function I created earlier to do this
    $("#displayGoal").text(targetNumber);
    $("#displayWins").text(yourWins);
    $("#displayLosses").text(yourLosses);



    $(".crystalWrapper").on("click", "#pinkImg", function(){
        yourScore += gem1;
        editYourScore();
        
    }).on("click", "#tealImg", function () {
        yourScore += gem2;
        editYourScore();
        
    }).on("click", "#purpleImg", function () {
        yourScore += gem3;
        editYourScore();
        
    }).on("click", "#blueImg", function () {
        yourScore += gem4;
        editYourScore();
        
    });



}); //ends the "document.ready" code