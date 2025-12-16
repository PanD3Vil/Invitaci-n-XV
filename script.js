// Background Music - Auto-play
const music = document.getElementById('backgroundMusic');
music.volume = 0.3; // Set volume to 30%

// Try to autoplay when page loads
window.addEventListener('load', function() {
    music.play().catch(function(error) {
        console.log('Autoplay was prevented. User interaction needed.');
    });
});

// Also try to play on first user interaction
document.addEventListener('click', function() {
    if (music.paused) {
        music.play();
    }
}, { once: true });

// Countdown Timer
const fechaEvento = new Date('2026-01-24T17:30:00').getTime();

function actualizarCountdown() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');

    if (diferencia < 0) {
        clearInterval(intervalo);
        document.querySelector('.countdown').innerHTML = '<p style="font-size: 2em; color: #5dade2;">¡Es hoy!</p>';
    }
}

const intervalo = setInterval(actualizarCountdown, 1000);
actualizarCountdown();

// Scroll Animations
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(elemento => {
    observador.observe(elemento);
});
