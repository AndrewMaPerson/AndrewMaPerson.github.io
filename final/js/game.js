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
        triviaAnswer.innerHTML = fname + ", you are wrong, L you."
    } 
    else if(sevenbillion){
        triviaAnswer.innerHTML = fname + ", closer, Despacito has this many."
    }
    else if(twelvebillion){
        triviaAnswer.innerHTML = fname + ", you are right!!! congrats. "
    }
    else if(sixteenbillion){
        triviaAnswer.innerHTML = fname + ", you must really love Baby Shark ugh."
    }


}