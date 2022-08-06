//console.log("hello");
let userScore=0;
let compScore=0;
const u_score_span= document.getElementById("user-score");
const c_score_span= document.getElementById("comp-score");
const board_div= document.querySelector(".board");
const result_p= document.querySelector(".results >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");



function getcomputerChoice(){
    const choices=['r','p','s'];
    const ran_choice=(Math.floor(Math.random()*3));
    return choices[ran_choice];
}
function convert(letter){
    if(letter==="r")return("Rock");
    if(letter==="p")return("Paper");
    return("Scissors");
}

function win(userChoice,compChoice){
    userScore++;
    u_score_span.innerHTML=userScore;
    c_score_span.innerHTML=compScore;
    result_p.innerHTML=convert(userChoice) +" beats "+convert(compChoice)+ ". You gained a point!"
}

function lose(userChoice,compChoice){
    compScore++;
    u_score_span.innerHTML=userScore;
    c_score_span.innerHTML=compScore;
    result_p.innerHTML=convert(userChoice) +" beats "+convert(compChoice)+ ".Better luck next time!"
}

function draw(userChoice,compChoice){
    u_score_span.innerHTML=userScore;
    c_score_span.innerHTML=compScore;
    result_p.innerHTML="Its a draw!!"
}

function game(userChoice){
    const compChoice=getcomputerChoice();
    switch(userChoice+compChoice){
        case "sp":
        case "pr":
        case "rs":
            win(userChoice,compChoice);
        break;
        
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,compChoice);
        break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,compChoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
})
paper_div.addEventListener('click',function(){
    game("p");
}) 
scissor_div.addEventListener('click',function(){
    game("s");
})
}
main();