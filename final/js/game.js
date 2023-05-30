//function for trivia question
function trivia1(){
    //get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //get handels and values from radio sellection

    let fifteenSelected = document.getElementById("2015").checked;
    let sixteenSelected = document.getElementById("2016").checked;
    let seventeenSelected = document.getElementById("2017").checked;
    let eighteenSelected = document.getElementById("2018").checked;

    if(fifteenSelected){
        triviaAnswer.innerHTML = "Not this early!"
    } 
    else if(sixteenSelected){
        triviaAnswer.innerHTML = "Correct! How did you know?"
    }
    else if(seventeenSelected){
        triviaAnswer.innerHTML =  "We've been around longer than this."
    }
    else if(eighteenSelected){
        triviaAnswer.innerHTML =  "Try again!"
    }


}