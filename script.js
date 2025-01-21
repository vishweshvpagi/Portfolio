// script.js
document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.getElementById("text-container");
  const words = ["Programmer", "Artist", "Author", "Designer", "Developer"];
  let index = 0;

  function changeText() {
    // Create new span element
    const newText = document.createElement("span");
    newText.className = "text-change";
    newText.textContent = words[index];

    // Clear existing text and append new text
    textContainer.innerHTML = "";
    textContainer.appendChild(newText);

    // Trigger reflow and add show class to animate
    requestAnimationFrame(() => {
      newText.classList.add("show");
    });

    // Move to the next word
    index = (index + 1) % words.length;

    // Change text every 3 seconds (adjust timing as needed)
    setTimeout(changeText, 3000);
  }

  // Start the text change
  changeText();
});
