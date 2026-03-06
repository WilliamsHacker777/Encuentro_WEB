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

    // --- Custom Smooth Scroll with Offset for Fixed Navbar ---
    function smoothScrollTo(endY, duration) {
        const startY = window.pageYOffset || document.documentElement.scrollTop;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        function easeInOutQuart(time, from, distance, duration) {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        }

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
                window.scrollTo(0, endY);
            } else {
                window.scrollTo(0, newY);
            }
        }, 1000 / 60); // 60 fps
    }

    document.querySelectorAll('.nav-links a[href^="#"], .cta-btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Determine navbar offset height
                const navHeight = navbar.offsetHeight;

                // Calculate position considering offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                smoothScrollTo(offsetPosition, 800); // 800ms duration for visible smoothness
            }
        });
    });

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
