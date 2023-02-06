function add(step) {
    //gets the current number
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    //adds the step number
    number = parseInt(number) + step;
    //updates the number displayed
    numberElement.innerText = number;
}

function minus(step) {
    //gets the current number
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    //minus the step number
    number = parseInt(number) - step;
    //updates the number displayed
    numberElement.innerText = number;
}

