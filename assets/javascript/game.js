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
    var gem1 = Math.floor(Math.random ()*12)+1;
    var gem2 = Math.floor(Math.random ()*12)+1;
    var gem3 = Math.floor(Math.random ()*12)+1;
    var gem4 = Math.floor(Math.random ()*12)+1;
    var crystalValue = 0;

    console.log("gem1 =" + gem1);
    console.log("gem2 =" + gem2);
    console.log('gem3 =' + gem3);
    console.log('gem4 =' + gem4);
    console.log('crystalValue =' + crystalValue);


    var ChangeYourScore = $("#displayScore").text(yourScore);
    $("#displayGoal").text(targetNumber);
    $("#displayWins").text(yourWins);
    $("#displayLosses").text(yourLosses);

    if (yourScore === targetNumber) {
        return yourWins ++;
    } else if (yourScore > targetNumber) {
        return yourLosses ++;
    // If it's not greater than or equal to, it is less than.
    } else {
        return yourScore =+ crystalValue;
    };

    $(".crystalWrapper").on("click", "#pinkImg1", function(){
        yourScore += gem1;
        ChangeYourScore.text(yourScore);
        
    }).on("click", "#tealImg", function () {
        yourScore += gem2;
        $("#displayScore").text(yourScore);
        
    }).on("click", "#purpleImg", function () {
        yourScore += gem3;
        $("#displayScore").text(yourScore);
        
    }).on("click", "#pinkImg2", function () {
        yourScore += gem4;
        $("#displayScore").text(yourScore);
        
    });



}); //ends the "document.ready" code