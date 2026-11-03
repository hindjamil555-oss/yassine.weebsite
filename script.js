
// SECRET LETTERS
function openLetter(name) {
    const letter = document.getElementById(name + "-letter");

    letter.hidden = !letter.hidden;

    const button = letter.previousElementSibling;

    if (button && button.tagName === "BUTTON") {
        button.textContent = letter.hidden
            ? "Open my letter ♡"
            : "Close my letter ♡";
    }
}

// MUSIC PLAYER
const music = document.getElementById("friendshipMusic");
const musicButton = document.getElementById("musicButton");
const musicStatus = document.getElementById("musicStatus");

function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(() => {
                musicButton.textContent = "❚❚ Pause music";
                musicStatus.textContent = "Music is playing ♡";
            })
            .catch(() => {
                musicStatus.textContent =
                    "Please add your music.mp3 file first ♡";
            });
    } else {
        music.pause();
        musicButton.textContent = "▶ Play music";
        musicStatus.textContent = "Music is paused ♡";
    }
}

music.addEventListener("ended", () => {
    musicButton.textContent = "▶ Play music";
    musicStatus.textContent = "Music is paused ♡";
});

// MAGICAL FLOATING HEARTS AND STARS
const magic = document.getElementById("magic");
const decorations = ["♡", "✧", "✨", "🌸", "💕"];

function createMagic() {
    const item = document.createElement("span");

    item.className = "floating";
    item.textContent =
        decorations[Math.floor(Math.random() * decorations.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (14 + Math.random() * 20) + "px";
    item.style.animationDuration = (5 + Math.random() * 5) + "s";

    magic.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);
}

setInterval(createMagic, 600);
