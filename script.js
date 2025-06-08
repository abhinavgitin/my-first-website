// Step 1: Grab the button and input elements
const button = document.getElementById("magicBtn");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

// Step 2: Add a function when the button is clicked
button.addEventListener("click", function () {
  const userText = input.value;

  if (userText.trim() === "") {
    output.textContent = "Please type something first!";
    output.style.color = "red";
  } else {
    output.textContent = "You typed: " + userText;
    output.style.color = "green";
  }
});
