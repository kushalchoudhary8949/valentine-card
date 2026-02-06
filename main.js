const nameElement = document.getElementById("girlName");

// Get name from URL
const params = new URLSearchParams(window.location.search);
const girlName = params.get("name");

// If name exists, show it
if (girlName) {
    nameElement.innerHTML = girlName;
} else {
    nameElement.innerHTML = "oyee sundrii 💖";
}



const noBtn = document.getElementById("btn2");
const yesBtn = document.getElementById("btn1");
const question = document.getElementById("id2");

let isLocked = false;   // control variable

// NO runs only if not locked
function moveButton(){

    if (isLocked) return;   // stop moving after YES

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
};
noBtn.addEventListener("mouseenter",moveButton);
noBtn.addEventListener("touchstart",moveButton);

// When YES is clicked
yesBtn.addEventListener("click", function () {

    question.innerHTML = "i knew 💖<br> but sorry i am not intrested ✨";

    isLocked = true;   // stop movement

    // Bring NO back to normal position
    noBtn.style.display = "none";
    yesBtn.style.display="none";
});

