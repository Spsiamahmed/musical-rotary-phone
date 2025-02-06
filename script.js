function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("user-input").value = "";
        getBotResponse(userInput);
    }
}

function sendMessageOnEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function addMessage(message, className) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.className = "message " + className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    // Mock response for demonstration purposes
    var botResponse = "You said: " + userInput;
    setTimeout(function() {
        addMessage(botResponse, "bot-message");
    }, 1000);
}
