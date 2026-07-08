let userScore = 0;
let computerScore = 0;

// ------------------ Game ------------------

function playGame(userChoice) {

    const choices = ["Stone", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    const computerChoice = choices[randomIndex];

    document.getElementById("userChoice").innerHTML =
        "Your Choice: " + userChoice;

    document.getElementById("computerChoice").innerHTML =
        "Computer Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    } else if (

        (userChoice === "Stone" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Stone") ||
        (userChoice === "Scissors" && computerChoice === "Paper")

    ) {

        result = "🎉 You Win!";
        userScore++;

    } else {

        result = "😢 Computer Wins!";
        computerScore++;

    }

    document.getElementById("winner").innerHTML =
        "Result: " + result;

    document.getElementById("userScore").innerHTML =
        userScore;

    document.getElementById("computerScore").innerHTML =
        computerScore;

}

// ------------------ Reset ------------------

function resetGame() {

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;

    document.getElementById("userChoice").innerHTML =
        "Your Choice:";

    document.getElementById("computerChoice").innerHTML =
        "Computer Choice:";

    document.getElementById("winner").innerHTML =
        "Result:";

}

// ------------------ Theme ------------------

const themeBtn = document.getElementById("theme-btn");

// Check Saved Theme
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");
    themeBtn.innerHTML = "🌙 Dark Mode";

} else {

    document.body.classList.remove("light");
    themeBtn.innerHTML = "☀️ Light Mode";

}

// Toggle Theme
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = "🌙 Dark Mode";

    } else {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = "☀️ Light Mode";

    }

});