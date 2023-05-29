//function for trivia question
function trivia1(){
    //get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //get handels and valuyes from radio sellection

    let onebillion = document.getElementById("1-billion").checked;
    let sevenbillion = document.getElementById("7-billion").checked;
    let twelvebillion = document.getElementById("12-billion").checked;
    let sixteenbillion = document.getElementById("16-billion").checked;

    if(onebillion){
        triviaAnswer.innerHTML = "Not this early!"
    } 
    else if(sevenbillion){
        triviaAnswer.innerHTML = "Correct! How did you know?"
    }
    else if(twelvebillion){
        triviaAnswer.innerHTML =  "We've been around longer than this."
    }
    else if(sixteenbillion){
        triviaAnswer.innerHTML =  "Try again!"
    }


}