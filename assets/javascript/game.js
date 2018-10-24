//Stats Variables
var wins= 0;
var loses=0;

//New Game
function newGame(){
    totalNumber=0
    $("#ruby").attr("data-crystalvalue", ruby);
    $("#diamond").attr("data-crystalvalue", diamond);
    $("#sapphire").attr("data-crystalvalue", sapphire);
    $("#emerald").attr("data-crystalvalue", emerald);
    $("#wins").text(wins)
    $("#loses").text(loses)
    $("#ruby").append(ruby);
    $("#diamond").append(diamond);
    $("#sapphire").append(sapphire);
    $("#emerald").append(emerald);
}

//Random Winning Number
$( document ).ready(function() {
    var winningNumber = Math.floor(Math.random() * (120) + (19));
    console.log(winningNumber)
    $(".RandomNumber").text(winningNumber);


});

//Random Crystals Numbers

    //Ruby
    var ruby = Math.floor(Math.random() * (12) + (1) );
    console.log(ruby)
    $(".ruby").text(ruby)

    //Diamond
    var diamond = Math.floor(Math.random() * (12) + (1) );
    console.log(diamond)
    $(".diamond").text(diamond)

    //Saffire
    var sapphire = Math.floor(Math.random() * (12) + (1) );
    console.log(sapphire)
    $(".sapphire").text(sapphire)
    
    //Emerald
    var emerald = Math.floor(Math.random() * (12) + (1) );
    console.log(emerald)
    $(".emerald").text(emerald)
   
//Adding Crystal Numbers
    $(".image").on("click", function(){
        if (totalNumber >= winningNumber) {
            return;
        }

        var crystalValue = $(this).attr("data-crystalWorth");
        crystalValue = parseInt(crystalValue);
        totalNumber += crystalValue;
        console.log(crystalValue)
        $(".totalScore").text(totalNumber);

        //If they Win or Lose
        if (totalNumber === winningNumber) {
            wonPop(); 
        } else if (totalNumber > winningNumber) {
            lossedPop();
        }

//Winning & Lossing Popups
    //Won the Game
    function wonPop(){
        alert("Thats a Dub!")
        wins ++;
        $("#wins").text(wins);
    }
    //Lose the Game
    function lossedPop(){
        alert("Thats an L!")
        loses ++;
        $("#loses").text(loses);
    }
        

});



