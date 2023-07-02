//Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.
// Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
 
const buttonColours = ["red","blue","green","yellow" ];
const gamePattern = [];
const userClickedPattern = [];
let randomNumber;
let randomChosenColour;
var delayInMilliseconds =400;




function nextSequence(){
    
randomNumber = Math.floor(Math.random() * 3) + 1;
randomChosenColour = buttonColours[randomNumber];


//jquery section
jQuery(document).ready(function() {
    jQuery(document).keypress(function() {
        jQuery("#" + randomChosenColour).fadeOut(100).fadeIn(100);
       playSound(`${randomChosenColour}`);
    });
});


//when btn is clicked
$(document).ready(function() {
    var id;  
    $('.btn').click(function() {

     id=$(this).attr('id');
     animatePress(id);
      playSound(id);
    
    });
  });
  


//storing  userChosenColour

$(document).ready(function() {
  var userChosenColour; // Variable to store the ID of the clicked button

  $('.btn').click(function() {
    // Handler function for button clicks
    userChosenColour = $(this).attr('id'); // Store the ID of the clicked button
    userClickedPattern.push(userChosenColour);
   
    
  });
});

gamePattern.push(randomChosenColour)

}


nextSequence();


function playSound(name){
   var audio = new Audio(`${name}.mp3`);
   audio.play();
 }



 function animatePress(currentColour){

    $(document).ready(function(){ 
        $(".btn").click(function(){
          currentColour=$(this).addClass("pressed")
        setTimeout( function(){ 
            $(".btn").removeClass("pressed")},
           delayInMilliseconds)
       
        })

 })
 //step 1 when btn is clickedDONE
 //step 2 add box shadow(pressed) to the btn clicked
 //
}

 
//the first time i press animate, it doesnt do anything but instead logs the whole userClickedPattern