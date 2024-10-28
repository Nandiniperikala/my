// script.js
const countdown = document.getElementById('countdown');
const targetDate = new Date("YYYY-MM-DD");  // Replace with his birthday date

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `${days} days left!`;
}

function revealGift() {
    document.getElementById('gift').style.display = 'block';
}

setInterval(updateCountdown, 1000 * 60 * 60 * 24);  // Update every day
