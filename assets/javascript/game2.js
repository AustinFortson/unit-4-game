var targetNumber=Math.floor(Math.random() * (120) + (19));
console.log(targetNumber)
    $(".RandomNumber").text(targetNumber);

var counter =0;

var numberOptions = [Math.floor(Math.random() * (12) + (1) ),
                    Math.floor(Math.random() * (12) + (1) ),
                    Math.floor(Math.random() * (12) + (1) ),
                    Math.floor(Math.random() * (12) + (1) )]

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/Ruby.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(".buttons").append(imageCrystal);
    }

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $(".totalScore").text(counter)

        if (counter === targetNumber) {
            alert("You win!");
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
          }
        });
