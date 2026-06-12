// --- Activity 1: DOM Manipulation ---
const heading = document.querySelector("#page-title");
// This changes the text of the h1 as soon as the page loads
heading.textContent = "JavaScript is Working!";

// --- Activity 2 & 3: Click Event and Counter ---
const button = document.querySelector("#change-btn");
let count = 0;

button.addEventListener("click", () => {
    // Activity 3: Increase the count
    count++;
    
    // Activity 2 & 3: Log to the console
    console.log("Button was clicked");
    console.log("Count is now: " + count);
});