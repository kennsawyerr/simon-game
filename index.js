//Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
// Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
 //$("#level-title").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
const buttonColours = ["red", "blue","green","yellow" ];
const gamePattern = []
function nextSequence(){

    randomNumber;
    console.log(randomNumber)
}

const randomNumber = Math.floor(Math.random() * 3) + 1

   //Use jQuery to select the button with the same id as the randomChosenColour
   //$("#level-title").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
const randomChosenColour = buttonColours[randomNumber]

// alert(randomChosenColour)
gamePattern.push(randomChosenColour)

// Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.