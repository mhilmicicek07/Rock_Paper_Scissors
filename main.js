/*
Beraberlik durumları
r r => draw
s s => draw
p p => draw
--------------------
Kazanma durumları
r s => win
s p => win
p r => win
--------------------
Kaybetme durumları
s r => lose
p s => lose
r p => lose
*/

// DOM ELEMENTS
const userScoreSpan = document.getElementById("userScore"),
    computerScoreSpan = document.getElementById("computerScore"),
    scoreBoard = document.querySelector(".scoreBoard"),
    resultDiv = document.querySelector("#resullt"),
    rockDiv = document.querySelector("#rock"),
    paperDiv = document.querySelector("#paper"),
    scissorsDiv = document.querySelector("#scissors");

// VARIABLES
let userScore = 0,
    computerScore = 0;

// ilk olarak benim seçimim, ikinci olarak da bilgisayar seçimi
/* 
"rockscissors" => win
"scissorspaper" => win
"paperrock" => win
*/

function win(userChoice, computerChoice) {
    // kazandığımda puanım artsın
    userScore++;
    // bu puanlamadaki değişiklik html'de görüntülensin.
    userScoreSpan.innerHTML = userScore;
    // son olarak açıklama ile neden kazandığım anlatılsın
    resultDiv.innerHTML = `${userChoice} beats ${computerChoice}, you win!`;
}

function lose(userChoice, computerChoice) {
    // bilgisayarın puanı artsın
    computerScore++;
    // bu puanlamadaki değişiklik hmtl'de görüntülensin
    computerScoreSpan.innerHTML = computerScore;
    // son olarak açıklama ile neden kaybettiğim anlatılsın
    resultDiv.innerHTML = `${computerChoice} beats ${userChoice}, you lose...`;
}

function draw(userChoice, computerChoice) {
    resultDiv.innerHTML = `You both choosed ${computerChoice} and ${userChoice}, draw!`;
}

function main() {
    rockDiv.addEventListener("click", function () {
        game("rock");
    });
    paperDiv.addEventListener("click", function () {
        game("paper");
    });
    scissorsDiv.addEventListener("click", function () {
        game("scissors");
    });
}

function getComputedChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

/*
Beraberlik durumları
r r => draw / s s => draw / p p => draw
Kazanma durumları
r s => win / s p => win / p r => win
Kaybetme durumları
s r => lose / p s => lose / r p => lose
*/

function game(userChoice) {
    const computerChoice = getComputedChoice();

    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;

        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose(userChoice, computerChoice);
            break;

        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
            break;
    }
}

main();

function reset(){
    resultDiv.innerHTML = "Game Starts Now!";
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}
