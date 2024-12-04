// Selecciona el contenedor donde se insertarán los testimonios
const testimoniosDiv = document.getElementById("testimonios");

// Crea el contenido de la sección de testimonios
testimoniosDiv.innerHTML = `
    <div class="row py-5 bg-light">
        <div class="col">
            <div class="border-bottom">
                <h1 class="text-center">Testimonios</h1>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body text-center">
                    <p class="card-text">"Los productos son de excelente calidad, el servicio es rápido y confiable. ¡Altamente recomendado!"</p>
                    <h5 class="card-title">- Juan Pérez</h5>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body text-center">
                    <p class="card-text">"La mejor experiencia de compra en línea que he tenido. Los productos llegaron en perfectas condiciones."</p>
                    <h5 class="card-title">- Ana Martínez</h5>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body text-center">
                    <p class="card-text">"Gran variedad de productos y precios competitivos. Definitivamente volveré a comprar aquí."</p>
                    <h5 class="card-title">- Luis Gómez</h5>
                </div>
            </div>
        </div>
    </div>
`;
