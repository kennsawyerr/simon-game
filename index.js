
// Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")
 

let randomNumber;
let randomChosenColour;
var delayInMilliseconds =150;
 let level= 0;
const buttonColours = ["red","blue","green","yellow" ];
const gamePattern = [];
const userClickedPattern = [];// storing user patters
let userChosenColour;// stored in userClickePattern




function nextSequence(){
//randomnumber runs smoothky
        randomNumber = Math.floor(Math.random() * 4 ) ;
        //uttons randomly picked
        randomChosenColour = buttonColours[randomNumber];
    
        //jquery section 
        //picking the randomchsencolour to fade when the nextsequence runs
        jQuery("#" + randomChosenColour).fadeOut(100).fadeIn(100);
        //playsound for it
        playSound(`${randomChosenColour}`)
        //level should be added once it runs
        level++;
        //sned level to h1 
        $("#level-title").html(`Level ${level}`);

       //
        gamePattern.push(randomChosenColour)//sending colors to the array
        
        // gamePattern is pushed only onceee! it runs with the newSequence so it is only pushed once
  

        //end of nextSeuence function
}


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
$(document).ready(function(){
     $(document).one("keypress", function(){
        //once a keypresssed, it runs nextSequence()
       nextSequence();

     })
    
});

///////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


        //when btn is clicked, the button is animated
        $(document).ready(function() {
            let id;  //declaring btn holder first
            $('.btn').click(function() {//onclck, display the id of the btn

            id=$(this).attr('id');
            animatePress(id);//animateacoording to id
            playSound(id);//playsoundaccording to id 
           
            
            });
            
        });

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



$(document).ready(function() {
      $('.btn').click(function() {
      // Handler function for button clicks
      userChosenColour = $(this).attr('id'); // Store the ID of the clicked button
    //   
      userClickedPattern.push(userChosenColour)   
      checkAnswer(userClickedPattern.length-1);   
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




      function checkAnswer(currentLevel){

        if(userChosenColour[currentLevel]===gamePattern[currentLevel])
        { 
            if(userChosenColour.length===gamePattern.length)
            {setTimeout(function(){
                nextSequence()
            }
            , 1000)}
            else{
                playSound("wrong");
                $("body").addClass("game-over");
                $("#level-title").text("Game Over, Press Any Key to Restart");
          
                setTimeout(function () {
                  $("body").removeClass("game-over");
                }, 200);
          
                startOver();
              }
        } 
        
        
        // else {console.log("wrong") }
        else {console.log("error") } 
      }

      

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
