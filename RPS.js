let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const draw = () => {
    //console.log("Game was draw");
    msg.innerText = "Game draw, Play again.";
    msg.style.backgroundColor = "rgba(14, 6, 2, 0.829)"
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //console.log("You Win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You Lost");
        msg.innerText = `Oops You lost!, ${compChoice} beats ${userChoice}, Try again.`;
        msg.style.backgroundColor = "red"
    }

}
const gencompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};
const game = (userChoice) =>{
    const compChoice = gencompChoice()
    //console.log("userChoice = ", userChoice);
    //console.log("compChoice=", compChoice);
    if(userChoice === compChoice){
        draw();
    }
    else{
       let userWin = true;
       if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
       }
       else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
       }
       else{
        userWin =compChoice === "rock" ? false : true;
       }
       showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");

        //console.log("Choice was clicked", userChoice);
        game(userChoice)
    })
})