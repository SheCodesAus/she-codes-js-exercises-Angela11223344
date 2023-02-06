window.onload = function() {
    //creating a new speechBubble element as a div, with a message inside as a p
    let speechBubbleElement = document.createElement("div");
    //adding style to the new element
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";

    speechBubbleElement.appendChild(messageBox);

    //adding the element to the page
    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}

function showMessage() {
    //get the message and the name from the two text boxes
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("message-name").value;
    //join the message and the name together
    let wholeMessage = message + " - " + name 
    //display the message
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = wholeMessage;
}