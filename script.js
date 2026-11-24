
// Welcome Button Interaction
function showMessage() {
    alert("Welcome to my portfolio! Thank you for visiting. 😊");
}

// Dark and Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

// Welcome Message in Console
console.log("Welcome to My Creative Portfolio!");
