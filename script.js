function startSurprise() {
    // Display the hidden message
    document.getElementById('message').style.display = 'block';

    // Fireworks animation
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.animationDelay = Math.random() * 2 + 's';
        fireworksContainer.appendChild(firework);
    }
}

// Style the fireworks with CSS animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .firework {
            position: absolute;
            width: 5px;
            height: 5px;
            background: radial-gradient(circle, #ff6347, transparent);
            border-radius: 50%;
            animation: explode 1.5s ease-out forwards;
        }
        @keyframes explode {
            from { transform: scale(0); opacity: 1; }
            to { transform: scale(20); opacity: 0; }
        }
    </style>
`);
