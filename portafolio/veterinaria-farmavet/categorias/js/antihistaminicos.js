// productrecomendamos.js
const productListRecomendamos = document.getElementById('product-listrecomendamos');

// Ejemplo de productos recomendados
const productsRecomendados = [
    { name: 'ANTIHISTAMINICO CHINFIELD', imageSrc: 'img/Antihistaminico/Antihistaminico.png', descripProdu: '<h3>Indicaciones:</h3><br>Procesos alérgicos de cualquier etiología y localización y en todos los casos en que está indicada una medicación antihistamínica.<h3>Dosis y Administración:</h3><br>Equinos: 2 ml cada 100 kpv, 1 a 4 veces por día o según criterio del Médico Veterinario. Vía endovenosa (de elección) o intramuscular. Bovinos: 10 ml 1 a 4 veces por día o según criterio del Médico Veterinario. Vía endovenosa o intramuscular. Caninos y Felinos: 1 a 2 ml cada 5 kg de peso una o más veces por día o según criterio del Médico Veterinario. Vía endovenosa o intramuscular según urgencia.<h3>DOSIS TERAPÉUTICA:</h3><br>2-8 mg/kg.<h3>Composición y especies:</h3><br>Clorhidrato de Difenhidramina 1 g Agentes de formulación c.s.p. 100 ml Equinos deportivos y de trabajo no destinados al consumo alimentario humano, bovinos, caninos y felinos.<h3>Laboratorio:</h3>' }
];




// Agregar cada producto al DOM
productsRecomendados.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc, product.descripProdu);
    productListRecomendamos.appendChild(productElement);
});

