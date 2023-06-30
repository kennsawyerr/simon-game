//Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
// Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
 //$("#level-title").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
const buttonColours = ["red","blue","green","yellow" ];
const gamePattern = []
function nextSequence(){

    randomNumber;
    console.log(randomNumber)
}

const randomNumber = Math.floor(Math.random() * 3) + 1
const randomChosenColour = buttonColours[randomNumber]
//

//  $(document).click(function() {  
//      // Select and manipulate the button using jQuery
//     $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//   });


// $(document).ready(function(){
//     $("#" + randomChosenColour).click(function(){
//         $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
       
//     })
// })

jQuery(document).ready(function() {
    jQuery(document).keypress(function() {
        jQuery("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    });
});


$(document).ready(function() {
    $(document).keypress(function() {
        $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    });
});


// alert(randomChosenColour)
gamePattern.push(randomChosenColour)

// Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.