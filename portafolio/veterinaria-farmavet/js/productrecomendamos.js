// productrecomendamos.js
const productListRecomendamos = document.getElementById('product-listrecomendamos');

// Ejemplo de productos recomendados
const productsRecomendados = [
    { name: 'ANTRIFORMINT FM ®', imageSrc: 'img/product/ANTRIFORMINT.png', descripProdu: 'Para el tratamiento de anaplasmosis y babesia en bovinos, búfalos, equinos, ovinos y caprinos. Antibiótico de amplio espectro. Polvo para reconstituir.' },
    { name: 'ANTRIBAM 4G ®', imageSrc: 'img/product/atriban.png', descripProdu: 'Indicaciones: En bovinos, búfalos, ovinos y caprinos para la prevención, tratamiento y control de la tripanosomiasis. Dosis y Administración: Vía intramuscular profunda. Polvo para reconstituir. Agítese antes de usar.' },
    { name: 'ASCEND', imageSrc: 'img/product/ascend.png', descripProdu: 'Indicaciones: Está indicado para la prevención y tratamiento de la piroplasmosis, anaplasmosis, ehrlichiosis, hepatozoonosis y citauxzoonosis. Dosis y Administración: Vía subcutánea o intramuscular. Bovinos, Ovinos y Caprinos: 1 - 2,5 ml por cada 100 kg de peso vivo. Equinos: 2 ml por cada 100 kg de peso vivo. Caninos: 0,5 ml por cada 10 kg de peso vivo. DOSIS TERAPÉUTICA: 1-5 mg ' },
    { name: 'ENROFLOXACINA 10% ®', imageSrc: 'img/product/enrofloxasina.png', descripProdu: 'Indicaciones: Para tratamiento de procesos infecciosos del aparato respiratorio, digestivo y genitourinario. Infecciones virales e infecciones de la piel causadas por gérmenes grampositivos, gramnegativos y micoplasma en Bovinos, Ovinos, Caprinos, Porcinos, Felinos y Caninos. Dosis y Administración: Vía subcutánea, intramuscular o intravenosa. (en el anca). Las ovejas y las cabras se inyectan en los músculos del muslo. Bovinos, Ovinos, Caprinos y Porcinos: 1 ml por cada 40 kg de peso vivo. En casos graves, aplicar 1ml por cada 20 kg de peso vivo. DOSIS TERAPÉUTICA: 8-10 mg' },
    { name: 'FLUXIPEN ®', imageSrc: 'img/product/fluxipen.png', descripProdu: 'Indicaciones: Antibiótico de rápido efecto y prolongada acción en infecciones causadas por gérmenes sensibles a la penicilina. Suspensión inyectable estéril. Dosis y Administración: Vía intramuscular profunda. Dosis General: 1 ml por 20 kg de peso vivo. Aplicar 3 ml por cada 50 - 100 de peso vivo. Tratamiento: de 1 a 3 días consecutivos. Después de reconstruir es estable por 30 días en refrigeración. DOSIS TERAPEUTICA: 11.000 - 22.000 UI' },
    { name: 'RESANIQ ®', imageSrc: 'img/product/RESANIQ.png', descripProdu: '<h1>Indicaciones:</h1> <p>En bovinos, ovinos, caprinos y porcinos en el tratamiento preventivo y curativo de infecciones respiratorias (pasteurelosis, neumonía, bronconeumonía, pleuroneumonía), infecciones urogenitales (cistitis, nefritis, metritis, síndrome MMA de las cerdas), infecciones cutáneas y tejidos blandos (pododermatitis abscesos) e infecciones postparto</p> <br>. <h2>Dosis y Administración:</h2> <br> Vía intramuscular o subcutánea. Porcinos, Ovinos, Bovinos y Caprinos: 1 ml por cada 10 kg de peso vivo. Repetir la dosis a las 48 horas. DOSIS TERAPÉUTICA: 10 mg' },
    { name: 'RESANIQ ®', imageSrc: 'img/product/RESANIQ.png', descripProdu: '<h1>hola</h1> <br> <h1>hola</h1>' }

];

// Agregar cada producto al DOM
productsRecomendados.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc, product.descripProdu);
    productListRecomendamos.appendChild(productElement);
});