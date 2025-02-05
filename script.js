let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let btn = document.querySelector("button");
let yourScore = document.querySelector("#countYou");
let compScore = document.querySelector("#countCom");
let score=0;
let selectedOption;
let choices = ['rock', 'paper', 'scissor'];
let compOption;

option1.addEventListener("click", () => {
    selectedOption = "rock";
    compOption = choices[Math.floor(Math.random() * choices.length)];
    result();
});

option2.addEventListener("click", () => {
    selectedOption = "paper";
    compOption = choices[Math.floor(Math.random() * choices.length)];
    result();
});

option3.addEventListener("click", () => {
    selectedOption = "scissor";
    compOption = choices[Math.floor(Math.random() * choices.length)];
    result();
});

let status = () => {
    if(selectedOption === "paper" && compOption === "rock"){
        return "You Win! | You select 'paper' & computer select 'rock'";
    }else if(selectedOption === "paper" && compOption === "scissor"){
        return "You Lost! | You select 'paper' & computer select 'scissor'";
    }else if(selectedOption === "rock" && compOption === "scissor"){
        return "You Win! | You select 'rock' & computer select 'scissor'";
    }else if(selectedOption === "rock" && compOption === "paper"){
        return "You Lost! | You select 'rock' & computer select 'paper'";
    }else if(selectedOption === "scissor" && compOption === "paper"){
        return "You Win! | You select 'scissor' & computer select 'paper'";
    }else if(selectedOption === "scissor" && compOption === "rock"){
        return "You Lost! | You select 'scissor' & computer select 'rock'";
    }else{
        return "Match Drawn!";
    }
}

function result () {
    btn.innerText = status();
    if(status().includes("You Win!")){
        btn.style.backgroundColor = "green";
        score = yourScore.innerText;
        score++;
        yourScore.innerText = score;
    }else if(status().includes("You Lost!")){
        btn.style.backgroundColor = "red";
        score = compScore.innerText;
        score++;
        compScore.innerText = score;
    }else{
        btn.style.backgroundColor = "blue";
    }
}