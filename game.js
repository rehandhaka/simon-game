var buttonColours= ["red","blue","green","yellow"],
    gamePattern= [],
    userClickedPattern=[],
    check=0,
    level=0;


if(check===0)
$(document).on("keypress",function(){
    nextSequence();
    check=1;
})



$(".btn").click(handle);

function handle(){

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checker(userClickedPattern.length-1);
}


function checker(num){
    if(gamePattern[num]===userClickedPattern[num]){
        

        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
        }
        
    }
    else{
        $("h1").text("Failed! Press Any key to Restart!");
        playSound("wrong");
        startOver();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
    }
}

function nextSequence(){

    userClickedPattern=[];

    $("h1").text("Level - "+ level);

    level++;
    var randomNumber= Math.floor(Math.random()*4);

    
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
    
}


function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");

    setTimeout( function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}


function startOver(){
    check=0;
    level=0;
    gamePattern=[];
}



