// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// --- DATA: Resultados Históricos ---
const piscoData = [
    {
        year: 2024,
        title: "XXII Encuentro de Productores y Concurso",
        date: "25 de Mayo de 2024",
        location: "Fundo San Rafael, Nasca",
        samples: "125 muestras evaluadas",
        image: "https://images.unsplash.com/photo-1595981267035-7b04d84d52b8?auto=format&fit=crop&q=80&w=1200", // Default placeholder image
        description: "En el marco de la <strong>XL Semana Turística de Nasca</strong>. El participante más galardonado fue <strong>Agroindustrias Sypzemid EIRL (Midolo)</strong>. El puntaje más alto del concurso fue <strong>91.33 puntos</strong> para Midolo - Negra Criolla (Mosto Verde No Aromático). Evaluado por 4 mesas de jurados, destacando Lucero Villagarcía, Livio Pastorino y José Panizo.",
        sponsors: "Corporación Agrolatina, Consur Trading S.A.C, Rotoplas, Agua Nasqua, Raulito, Hielo Santa Isabel, Hotel La Luz, Casa Hacienda Nasca Oasis, Hotel Don Agucho, Casa Andina, Fundo San Rafael y Hotel Oro Viejo.",
        categories: [
            {
                name: "Pisco Quebranta",
                winners: [
                    { place: "1", name: "Inversiones Sotomayor Velasquez (Pisco Velásquez) - 88.50 pts" },
                    { place: "2", name: "Viñas Toro Muerto S.R.L. (Toro Muerto) - 88.50 pts" },
                    { place: "3", name: "Agroindustrias Sypzemid EIRL (Midolo 2) - 87.00 pts" }
                ]
            },
            {
                name: "Pisco Mollar",
                winners: [
                    { place: "1", name: "Jose Miguel Flores Henriod (Alto los trinos) - 89.00 pts" },
                    { place: "2", name: "Bodegas y Viñedos Grimaldi EIRL (Grimaldi) - 88.33 pts" }
                ]
            },
            {
                name: "Pisco Negra Criolla",
                winners: [
                    { place: "1", name: "Pisco Camaná (Pisco Camaná) - 90.33 pts" },
                    { place: "2", name: "Agroindustrias Sypzemid EIRL (Midolo 1) - 88.33 pts" }
                ]
            },
            {
                name: "Pisco Italia",
                winners: [
                    { place: "1", name: "Agroindustrias Sypzemid EIRL (Midolo 1) - 91.00 pts" },
                    { place: "2", name: "Compañía Peruana de Pisco SAC (Huamaní) - 90.00 pts" },
                    { place: "3", name: "Korenke Peruana de Agroindustrias EIRL (Pisco Korenke) - 89.33 pts" }
                ]
            },
            {
                name: "Pisco Torontel",
                winners: [
                    { place: "1", name: "Rodrigo Ramirez Obando (Caoba's) - 89.50 pts" },
                    { place: "2", name: "Pisco Camaná (Pisco Camaná) - 85.50 pts" }
                ]
            },
            {
                name: "Pisco Moscatel",
                winners: [
                    { place: "1", name: "Pisco Camaná (Pisco Camaná) - 88.50 pts" },
                    { place: "2", name: "Agroindustrias Sypzemid EIRL (Midolo 2) - 86.50 pts" }
                ]
            },
            {
                name: "Pisco Albilla",
                winners: [
                    { place: "1", name: "Bodegas y Viñedos Grimaldi EIRL (Grimaldi) - 88.00 pts" }
                ]
            },
            {
                name: "Pisco Acholado",
                winners: [
                    { place: "1", name: "Agroindustrias Sypzemid EIRL (Midolo 1) - 87.50 pts" },
                    { place: "2", name: "Agroindustrias Sypzemid EIRL (Midolo 2) - 87.50 pts" },
                    { place: "Plata", name: "Menciones Plata (84.50 pts): Pisco Camaná, Caoba's y Toro Muerto" }
                ]
            },
            {
                name: "Pisco Mosto Verde No Aromático",
                winners: [
                    { place: "1", name: "Agroindustrias Sypzemid EIRL (Midolo - Negra Criolla) - 91.33 pts 🎉 Puntaje Más Alto" },
                    { place: "2", name: "Viñas Toro Muerto S.R.L. (Toro Muerto - Negra Criolla) - 90.00 pts" }
                ]
            },
            {
                name: "Pisco Mosto Verde Aromático",
                winners: [
                    { place: "1", name: "Rodrigo Ramirez Obando (Caoba's - Moscatel) - 90.00 pts" },
                    { place: "2", name: "Destilería Castro SAC (Pisco Nasca) - 90.00 pts" },
                    { place: "3", name: "Agroindustria Lorenzo Dmora (Pisco San Gallán - Italia) - 90.00 pts" }
                ]
            },
            {
                name: "Pisco Mosto Verde Acholado",
                winners: [
                    { place: "1", name: "Agroindustrias Sypzemid EIRL (Midolo) - 90.33 pts" },
                    { place: "2", name: "Destilería Castro SAC (Pisco Nasca) - 90.00 pts" }
                ]
            }
        ]
    },
    {
        year: 2022,
        title: "XX Encuentro de Productores y Concurso",
        date: "21 de Mayo de 2022",
        location: "Hotel Majoro, Nasca",
        samples: "175 muestras evaluadas",
        description: "<strong>Puntaje más alto:</strong> Pisco Midolo (Quebranta) de SYPZEMID E.I.R.L. con <strong>92.67 puntos (Gran Oro)</strong>. Se utilizó la norma OIV. Evento presidido por Alan Watkin Sejuro, con José Carlos Falconi Moyano como Director de Cata y 12 catadores en 4 mesas.",
        categories: [
            {
                name: "Pisco Quebranta",
                winners: [
                    { place: "Gran Oro", name: "SYPZEMID E.I.R.L. (Pisco Midolo) - 92.67 pts 🎉" },
                    { place: "Gran Oro", name: "Vitivinícola la Pampa S.A.C. (Pampas de Ica) - 92.00 pts" },
                    { place: "1", name: "Bodegas y Viñedos Tabernero SAC (Tabernero) - 91.00 pts (Oro)" }
                ]
            },
            {
                name: "Pisco Mollar",
                winners: [
                    { place: "1", name: "Bodegas Emperador S.A.C. (Incas Pisco y Emperador) - 86.33 pts" },
                    { place: "2", name: "Viña Toro Muerto (Toro Muerto) - 86.67 pts" },
                    { place: "3", name: "Bodegas Grimaldi (Pisco Grimaldi 19) - 86.67 pts" }
                ]
            },
            {
                name: "Pisco Negra Criolla",
                winners: [
                    { place: "Plata", name: "Flora Reyna Ayala Arenas (Pisco Gutierrez) - 82.33 pts" },
                    { place: "Plata", name: "Viña Toro Muerto (Toro Muerto) - 82.33 pts" }
                ]
            },
            {
                name: "Pisco Uvina",
                winners: [
                    { place: "1", name: "Viñedos Cortez S.A.C. (Pisco Don Cortez) - 87.67 pts" }
                ]
            },
            {
                name: "Pisco Italia",
                winners: [
                    { place: "1", name: "Garcia Rosell Acosta Luis Guillermo (Barón de Huara) - 85.33 pts" },
                    { place: "2", name: "Flora Reyna Ayala Arenas (Pisco Gutierrez) - 85.33 pts" }
                ]
            },
            {
                name: "Pisco Torontel",
                winners: [
                    { place: "1", name: "TLC Promotores SAC (Piscos Don Álvaro) - 88.33 pts" },
                    { place: "2", name: "Compañía Peruana del Pisco SAC (Huamani) - 87.67 pts" }
                ]
            },
            {
                name: "Pisco Moscatel",
                winners: [
                    { place: "1", name: "Pisco Camaná Eirl (Camaná) - 91.33 pts" },
                    { place: "2", name: "Inversiones Campos Carire S.R.L (Don Miguel Campos) - 90.00 pts" }
                ]
            },
            {
                name: "Pisco Albilla",
                winners: [
                    { place: "1", name: "Vitivinicola Nyrla Levano EIRL (Pisco Nyrla Levano) - 86.67 pts" }
                ]
            },
            {
                name: "Pisco Acholado",
                winners: [
                    { place: "1", name: "Agroindustria Lorenzo D'Mora S.A.C. (Pisco Fiesta del Sol) - 86.00 pts" },
                    { place: "2", name: "Destilería la Caravedo SRL (Pago de los Frailes) - 85.00 pts" }
                ]
            },
            {
                name: "Pisco Mosto Verde No Aromático",
                winners: [
                    { place: "1", name: "Bodegas Grimaldi (Pisco Grimaldi M1) - 89.33 pts" }
                ]
            },
            {
                name: "Pisco Mosto Verde Aromático",
                winners: [
                    { place: "1", name: "SYPZEMID E.I.R.L. (Pisco Midolo) - 86.67 pts" }
                ]
            },
            {
                name: "Pisco Mosto Verde Acholado",
                winners: [
                    { place: "1", name: "Agroindustria Lorenzo D'Mora S.A.C. (Pisco San Gallán) - 85.67 pts" }
                ]
            }
        ]
    },
    {
        year: 2021,
        title: "XIX Encuentro de Productores - Catando en Nasca",
        date: "29 de Mayo de 2021",
        location: "Nasca (Evento en Pandemia)",
        samples: "120 muestras evaluadas de 30 bodegas",
        description: "Evaluación por 10 catadores dirigida por el Ing. José Carlos Falconí.",
        categories: [
            {
                name: "Destacados 'El Campeador'",
                winners: [
                    { place: "Oro", name: "Pisco Puro Torontel (91.6 pts)" },
                    { place: "Oro", name: "Pisco Puro Quebranta (89.5 pts)" }
                ]
            }
        ]
    },
    {
        year: 2019,
        title: "XVII Encuentro de Productores y Concurso",
        date: "18 de Mayo de 2019",
        location: "Salón Auditorio DM Hoteles de Nasca",
        samples: "136 muestras evaluadas (28 productores)",
        description: "Organizado por APPUNASCA y la Dirección Regional de la Producción - DIREPRO.",
        categories: [
            {
                name: "Quebranta",
                winners: [
                    { place: "1", name: "Grupo Moquillaza S.A.C." },
                    { place: "2", name: "Miguel Faustino Calderón" },
                    { place: "3", name: "Destilería Castro S.A.C." }
                ]
            },
            {
                name: "Italia",
                winners: [
                    { place: "1", name: "Viña Toro Muerto S.R.L." },
                    { place: "2", name: "Miguel Faustino Calderón" },
                    { place: "3", name: "Corporación Rico S.A.C. – Pisco Costumbres" }
                ]
            },
            {
                name: "Torontel",
                winners: [
                    { place: "1", name: "Pisco Don Fede (Mirtha Alvarez Paredes)" },
                    { place: "2", name: "Vitivinícola Pampas" },
                    { place: "3", name: "Viña Toro Muerto S.R.L." }
                ]
            },
            {
                name: "Moscatel",
                winners: [
                    { place: "1", name: "Pisco Camaná E.I.R.L." },
                    { place: "2", name: "Corporación Rico S.A.C. – Pisco Costumbres" },
                    { place: "3", name: "Vitivinícola Pampas" }
                ]
            },
            {
                name: "Negra Criolla",
                winners: [
                    { place: "1", name: "Acapana S.A.C." },
                    { place: "2", name: "Asociación Productores de Piscos y Vinos de Caraveli" },
                    { place: "3", name: "Viña Toro Muerto S.R.L." }
                ]
            },
            {
                name: "Acholado",
                winners: [
                    { place: "1", name: "Destilería La Caravedo S.R.L." },
                    { place: "2", name: "Destilería Castro S.A.C." },
                    { place: "3", name: "Pisco Camaná E.I.R.L." }
                ]
            },
            {
                name: "Mosto Verde Aromático",
                winners: [
                    { place: "1", name: "Destilería La Caravedo S.R.L." },
                    { place: "2", name: "Vitivinícola Pampas" },
                    { place: "3", name: "Destilería La Caravedo S.R.L." }
                ]
            },
            {
                name: "Mosto Verde No Aromático",
                winners: [
                    { place: "1", name: "Grupo Moquillaza S.A.C." },
                    { place: "2", name: "Destilería La Caravedo S.R.L." },
                    { place: "3", name: "Vitivinícola Pampas" }
                ]
            },
            {
                name: "Mosto Verde Acholado",
                winners: [
                    { place: "1", name: "Corporación Rico S.A.C. – Pisco Costumbres" },
                    { place: "2", name: "Bodegas y Viñedos Grimaldi E.I.R.L." },
                    { place: "3", name: "Pisco Nascencia (Edgar Chang Aguilar)" }
                ]
            }
        ]
    },
    {
        year: 2018,
        title: "XVI Encuentro de Productores y Concurso",
        date: "5 de Mayo de 2018",
        location: "Salón Villla Eucalipto, Nasca",
        samples: "120 muestras evaluadas",
        description: "Participación de regiones de Arequipa, Ica y Lima. Evaluación por 13 catadores.",
        categories: [
            {
                name: "Uva Quebranta",
                winners: [
                    { place: "1", name: "Pisco Paca Paca (Ica)" },
                    { place: "2", name: "Pisco El Huarangal (Pisco-Ica)" },
                    { place: "3", name: "Pisco Portón (Ica)" }
                ]
            },
            {
                name: "Acholados",
                winners: [
                    { place: "1", name: "Pisco Barsol (Ica)" },
                    { place: "2", name: "Pisco Pampas (Ica)" },
                    { place: "3", name: "Pisco Don Reynaldo (Ica)" }
                ]
            },
            {
                name: "Uva Moscatel",
                winners: [
                    { place: "1", name: "Pisco Nazca (Nazca-Ica)" },
                    { place: "2", name: "Pisco Cuatro Gallos (Ica)" },
                    { place: "3", name: "Pisco Paca Paca (Ica)" }
                ]
            },
            {
                name: "Uva Torontel",
                winners: [
                    { place: "1", name: "Pisco Grimaldi (Chincha-Ica)" },
                    { place: "2", name: "Pisco Don Reynaldo (Ica)" },
                    { place: "3", name: "Pisco Paca Paca (Ica)" }
                ]
            },
            {
                name: "Italia",
                winners: [
                    { place: "1", name: "Pisco Costumbres (Arequipa)" },
                    { place: "2", name: "Pisco Don Alberto (Lima)" },
                    { place: "3", name: "Pisco Cuatro Gallos (Ica)" }
                ]
            },
            {
                name: "Mosto Verde Aromático",
                winners: [
                    { place: "1", name: "Pisco Costumbres (Arequipa)" },
                    { place: "2", name: "Pisco Tunga (Nazca-Ica)" },
                    { place: "3", name: "Pisco MacchuPisco (Ica)" }
                ]
            },
            {
                name: "Mosto Verde No Aromático",
                winners: [
                    { place: "1", name: "Pisco Pampas (Ica)" },
                    { place: "2", name: "Pisco Costumbres (Arequipa)" },
                    { place: "3", name: "Pisco Buena Cosecha (Villacurí-Ica)" }
                ]
            },
            {
                name: "Mosto Verde de Acholados",
                winners: [
                    { place: "1", name: "Pisco Portón (Ica)" },
                    { place: "2", name: "Pisco Don Reynaldo (Ica)" },
                    { place: "3", name: "Pisco Costumbres (Arequipa)" }
                ]
            }
        ]
    },
    {
        year: 2017,
        title: "XV Concurso de Pisco en Nasca",
        date: "1 de Julio de 2017",
        location: "Nasca",
        samples: "Múltiples participantes",
        description: "Organizado por el Gobierno Regional de Ica (DIRCETUR y DIREPRO).",
        categories: [
            {
                name: "Quebranta",
                winners: [
                    { place: "1", name: "Pisco Caravedo" },
                    { place: "2", name: "Pisco Nasca" },
                    { place: "3", name: "Pisco Parra del Valle" }
                ]
            },
            {
                name: "Torontel",
                winners: [
                    { place: "1", name: "Pisco Paca Paca" },
                    { place: "2", name: "Pisco Pampa de Ica" },
                    { place: "3", name: "Pisco Moquillaza" }
                ]
            },
            {
                name: "Moscatel",
                winners: [
                    { place: "1", name: "Pisco Nasca" },
                    { place: "2", name: "Pisco Paca Paca" },
                    { place: "3", name: "Pisco Torrentera" }
                ]
            },
            {
                name: "Italia",
                winners: [
                    { place: "1", name: "Pisco Alto Los Trilos" },
                    { place: "2", name: "Pisco Estela" },
                    { place: "3", name: "Pisco Pampa de Ica" }
                ]
            },
            {
                name: "Acholado",
                winners: [
                    { place: "1", name: "Pisco El Carmelo" },
                    { place: "2", name: "Pisco Nasca" },
                    { place: "3", name: "Pisco Parra del Valle" }
                ]
            },
            {
                name: "Mosto Verde No Aromático",
                winners: [
                    { place: "1", name: "Pisco Buena Cosecha" },
                    { place: "2", name: "Pisco Grimaldi" },
                    { place: "3", name: "Pisco El Portón" }
                ]
            },
            {
                name: "Mosto Verde Aromático",
                winners: [
                    { place: "1", name: "Pisco Moquillaza" },
                    { place: "2", name: "Pisco Parra del Valle" },
                    { place: "3", name: "Pisco Pampas de Ica" }
                ]
            }
        ]
    }
];

// --- RENDER LOGIC ---

const tabsContainer = document.getElementById('year-tabs');
const contentContainer = document.getElementById('year-content');

// Get medal icon based on place
function getMedalIcon(place) {
    if (place.toLowerCase() === 'gran oro') return '<i class="fa-solid fa-trophy" style="color:#D4AF37; margin-right: 15px; font-size: 1.2rem; text-shadow: 0 0 5px rgba(212,175,55,0.8);"></i>';
    if (place === '1' || place.toLowerCase() === 'oro') return '<i class="fa-solid fa-medal gold-medal"></i>';
    if (place === '2' || place.toLowerCase() === 'plata') return '<i class="fa-solid fa-medal silver-medal"></i>';
    if (place === '3' || place.toLowerCase() === 'bronce') return '<i class="fa-solid fa-medal bronze-medal"></i>';
    return '<i class="fa-solid fa-award" style="color:#aaa; margin-right: 15px;"></i>';
}

function renderContent(yearData) {
    // Fade out effect
    contentContainer.style.opacity = 0;

    setTimeout(() => {
        let html = `
            <div class="year-info-box">
                <h3>${yearData.title} (${yearData.year})</h3>
                <p><strong><i class="fa-regular fa-calendar"></i> Fecha:</strong> ${yearData.date || 'No especificada'}</p>
                <p><strong><i class="fa-solid fa-location-dot"></i> Lugar:</strong> ${yearData.location || 'No especificado'}</p>
                <p><strong><i class="fa-solid fa-vial"></i> Muestras:</strong> ${yearData.samples}</p>
                <p><strong><i class="fa-solid fa-circle-info"></i> Notas:</strong> ${yearData.description || ''}</p>
            </div>
        `;

        // Render full width image if it exists
        if (yearData.image) {
            html += `
            <div class="year-image-container">
                <img src="${yearData.image}" alt="Imagen del Encuentro ${yearData.year}" class="year-image">
            </div>
            `;
        }

        if (yearData.categories && yearData.categories.length > 0) {
            html += `
                <div class="categories-title-wrapper">
                    <h3 class="categories-title">Ganadores por Categoría</h3>
                </div>
                <div class="categories-grid">
            `;

            yearData.categories.forEach(cat => {
                html += `
                    <div class="category-card">
                        <div class="category-wrapper">
                            <h4>${cat.name}</h4>
                        </div>
                        <ul class="winners-list">
                            ${cat.winners.map(w => {
                    let parts = w.name.split(" - ");
                    let nameText = parts[0];
                    let ptsText = parts.length > 1 ? parts[1] : '';
                    let isMention = (w.place !== '1' && w.place !== '2' && w.place !== '3' && w.place.toLowerCase() !== 'oro' && w.place.toLowerCase() !== 'gran oro');
                    return `
                                <li>
                                    <div class="medal-container">${getMedalIcon(w.place)}</div>
                                    <div class="winner-info">
                                        <span class="winner-name">${nameText}</span>
                                        ${ptsText ? `<span class="winner-pts">${ptsText} ${isMention ? '<span style="font-size:0.85rem; font-style:normal; font-family:var(--font-body); color:#a49781;">(Mención)</span>' : ''}</span>` : ''}
                                    </div>
                                </li>
                                `;
                }).join('')}
                        </ul>
                    </div>
                `;
            });

            html += `</div>`;
        } else {
            html += `<p style="text-align: center; color: #aaa; margin-top: 2rem;"><i>Resultados detallados por categoría no disponibles para este año.</i></p>`;
        }

        contentContainer.innerHTML = html;
        contentContainer.style.opacity = 1;
    }, 300); // 300ms transition
}

function initTabs() {
    piscoData.forEach((data, index) => {
        const btn = document.createElement('button');
        btn.classList.add('tab-btn');
        if (index === 0) btn.classList.add('active'); // First tab active by default
        btn.textContent = data.year;

        btn.addEventListener('click', () => {
            // Remove active class from all
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            // Render content
            renderContent(data);
        });

        tabsContainer.appendChild(btn);
    });

    // Render initial content (most recent year)
    if (piscoData.length > 0) {
        renderContent(piscoData[0]);
    }
}

// Initialize the tabs on load
initTabs();
