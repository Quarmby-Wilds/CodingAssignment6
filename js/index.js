function bnj() {
    // Welcome prompt

    let name = prompt("Welcome to Bear, Ninja, Hunter. Please enter your name.")
    alert("Hi, " + name + ". Let's get started.")

    // Start game

    let choice = prompt("Please enter Bear, Ninja, or Hunter.").toLocaleLowerCase()

    while (choice != "bear" && choice != "ninja" && choice != "hunter") {
        choice = prompt("Uh oh! That wasn't one of the choices. Please choose Bear, Ninja, or Hunter.").toLocaleLowerCase()
    }

    // Generate computer answer

    let compChoice
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        compChoice = "Bear";
    } else if (randomNumber === 2) {
        compChoice = "Ninja";
    } else {
        compChoice = "Hunter";
    }

    let results = name + ", you picked " + choice + ".\nThe computer picked " + compChoice

    const resultElement = document.getElementById("results")
    resultElement.innerHTML = results

    console.log(name + ", you picked " + choice)
    console.log("The computer picked " + compChoice)

}

document.addEventListener("DOMContentLoaded", bnj)