document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <h1 class="logo">Encuentro Nacional de Productores de <span>Pisco</span></h1>
            <ul class="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#historia">Historia</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#resultados">Resultados Históricos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const navbar = document.getElementById('navbar');
    navbar.style.transition = 'top 0.3s ease-in-out';
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 0) {
            navbar.style.top = '0';
            lastScrollTop = 0;
            return;
        }

        if (scrollTop > lastScrollTop) {
            // Scroll down: ocultar navbar
            navbar.style.top = `-${navbar.offsetHeight}px`;
        } else {
            // Scroll up: mostrar navbar
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});
