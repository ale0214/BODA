// Countdown
function updateCountdown() {
    const weddingDate = new Date('January 10, 2026 16:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = `
        <div><span>${days}</span> días</div>
        <div><span>${hours}</span> horas</div>
        <div><span>${minutes}</span> minutos</div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrusel de fotos
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelector('.carousel-indicators');
    let currentIndex = 0;

    // Crear indicadores
    items.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => goToItem(index));
        indicators.appendChild(indicator);
    });

    // Actualizar indicadores
    function updateIndicators() {
        document.querySelectorAll('.carousel-indicators span').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Ir a un item específico
    function goToItem(index) {
        currentIndex = (index + items.length) % items.length;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
    }

    // Eventos
    prevBtn.addEventListener('click', () => goToItem(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToItem(currentIndex + 1));

    // Auto-avance (opcional)
    setInterval(() => goToItem(currentIndex + 1), 5000);

    // Inicializar
    updateIndicators();
});

