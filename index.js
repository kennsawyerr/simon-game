//Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
// Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
 

let randomNumber;
let randomChosenColour;
var delayInMilliseconds =150;
let levelTitle = document.getElementById("")
const buttonColours = ["red","blue","green","yellow" ];
const gamePattern = [];
const userClickedPattern = [];




function nextSequence(){
    // level++;
randomNumber = Math.floor(Math.random() * 4) ;
randomChosenColour = buttonColours[randomNumber];


//jquery section

   
 jQuery("#" + randomChosenColour).fadeOut(100).fadeIn(100);
 playSound(`${randomChosenColour}`);
;


//when btn is clicked
$(document).ready(function() {
    let id;  
    $('.btn').click(function() {

     id=$(this).attr('id');
     animatePress(id);
      playSound(id);
    
    });
  });


gamePattern.push(randomChosenColour)

}

$(document).ready(function(){
    // $(document).one("keypress", function(){
    //     nextSequence();
    // })
    nextSequence();
});

$(document).ready(function() {
    let userChosenColour; // Variable to store the ID of the clicked button
    $('.btn').click(function() {
      // Handler function for button clicks
      userChosenColour = $(this).attr('id'); // Store the ID of the clicked button
      userClickedPattern.push(userChosenColour);
      
    });
  });



function playSound(name){
   var audio = new Audio(`${name}.mp3`);
   audio.play();
 }

 function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");

        setTimeout(function() {
          $("#" + currentColour).removeClass("pressed");
        }, delayInMilliseconds);
      };
    
  
  

//  function animatePress(currentColour){

//     $(document).ready(function(){ 
//         $(".btn").click(function(){
//           currentColour=$(this).addClass("pressed")
//         setTimeout( function(){ 
//             $(".btn").removeClass("pressed")},
//            delayInMilliseconds)
       
//         })

//  })

// }

 
//the first time i press animate, it doesnt do anything but instead logs the whole userClickedPattern



// . Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

// $(document).one("keypress", function(){
//     nextSequence();
// })

 
// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
 
// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

// 5. Inside nextSequence(), update the h1 with this change in the value of level.

// All going well, this is what you should see when you refresh the website: