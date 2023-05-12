//this file is for code needed for 
//input, quiz and truth game


//global var for first name
let fname = "";

//function!
function greet(){
    let greetParagraph = document.getElementById("greet");

    //grab values from form
    fname = document.getElementById("fname").value;

    let lname = document.getElementById("lname").value; 

    let age = document.getElementById("age").value; 

    //check the input
    if(fname==="" || lname===""){
        alert("First and Last name cannot be empty!")
        return;
    }
    
    if(age==="" || age < 18){
        alert("invalid age!")
    }

    //update output
    greetParagraph.innerHTML = "Greeting, young " + age + " years old " + fname + "!"
}

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
        triviaAnswer.innerHTML = fname + ", you are wrong, L you."
    }
    else if(twelvebillion){
        triviaAnswer.innerHTML = fname + ", you are right!!! congrats. "
    }
    else if(sixteenbillion){
        triviaAnswer.innerHTML = fname + ", you are wrong, L you."
    }


}

function truths(){
    //get handle to answer paragraph
    let truthAnswer = document.getElementById("truthsandlies");

    //get handels and valuyes from radio sellection

    let locks = document.getElementById("locks").checked;
    let knives = document.getElementById("knives").checked;
    let pewdiepie = document.getElementById("pewdiepie").checked;


    if(locks&&knives&&pewdiepie){
        truthAnswer.innerHTML = fname + ", you sneaky little sh!t, don't cheat."
    }
    else if(locks&&knives){
        truthAnswer.innerHTML = fname + ", you are correct! Good job!"
    } 
    else if(locks||knives){
        truthAnswer.innerHTML = fname + ", you're close!"
    }
    else {
        truthAnswer.innerHTML = fname + ", you are dumb try again. "
    }

}