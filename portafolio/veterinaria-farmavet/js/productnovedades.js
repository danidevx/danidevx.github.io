// productnovedades.js
const productListNovedades = document.getElementById('product-listrenovedades');

// Ejemplo de productos novedades (puedes usar los mismos o diferentes)
const productsNovedades = [
    { name: 'SONENIX 150®', imageSrc: 'img/product-novedades/sonenix.png', descripProdu: 'Para Bovinos, Porcinos, Caprinos y Ovinos en el tratamiento de mastitis infecciosa y pododermatitis en ganado bovino, tratamiento en infecciones respiratorias, urogenitales, gastrointestinales, de piel y tejidos blandos. Vía intramuscular profunda.' },
    { name: 'ENOMETROL®', imageSrc: 'img/product-novedades/Enometrol.png', descripProdu: 'Para el tratamiento de infecciones respiratorias, genito-urinarias provocadas por bacterias gramnegativas y grampositivas. Infecciones de la cavidad oral y afecciones cutáneas. Vía oral. 0,2 ml por cada kg de peso vivo.' },
    { name: 'AMOXIGEN', imageSrc: 'img/product-novedades/amoxigen.png', descripProdu: 'Bovinos: Infecciones causadas por bacterias sensibles a la combinación de Amoxicilina y Gentamicina, como las presentes en neumonías, enteritis bacteriana, mastitis, metritis y abscesos cutáneos.' },
    { name: 'OXITETRACICLINA AL 5%', imageSrc: 'img/product-novedades/OXITETRACICLINA.png', descripProdu: 'Bovinos: para tratar Anaplasmosis, Lesiones Pódales, Leptospirosis, Metritis, sensibles a Oxitetraciclina. Porcinos: para tratar el Síndrome Mastitis Metritis Agalactia (MMA), Neumonía, Lesiones Pódales, sensibles a Oxitetraciclina. Ovinos: para tratar Pasteurelosis, Clamidiasis, Neumonía, Lesiones Pódales, sensibles a Oxitetraciclina. Aves: para tratar Coriza, Colera, Enfermedad Crónica Respiratoria (ECR), sensibles a Oxitetraciclina.' },
    { name: 'FLORFENICOL L.A.', imageSrc: 'img/product-novedades/FLORFENICOL.png', descripProdu: 'Antibiótico de amplio espectro que actúa contra bacterias gram positivas y gram negativas del ganado bovino, ovino, caprino, porcino y aves, como: Pasteurellas, Haemophylus somnus, Klebsiella sp., Escherichia coli, Moraxella sp., Salmonella sp., Bacteroides sp., Fusobacterium sp., Corynebacterium pyogenes, Clostridium sp., Streptococcus, causantes de infecciones como neumonías, pododermatitis, metritis, enteritis y en general, procesos susceptibles a bacterias sensibles al Florfenicol.' },
    { name: 'SULFACET', imageSrc: 'img/product-novedades/SULFACET.png', descripProdu: 'Sirve para combatir infecciones generales, agudas o crónicas, causadas por bacterias gram negativas o positivas, sensibles a la formulación en bovinos, equinos, ovinos, caprinos y porcinos. Esta indicado en Neumonías, Bronquitis Infecciosas, Difterias de los terneros, Enteritis Bacilar, Septicemia Hemorrágica, Metritis Séptica y Retención Placentaria; Mastitis Aguda, Poliartritis, Colibacilosis, Flemones y Abscesos, en infecciones secundarias de la Diarrea Blanca del ternero y como auxiliar en el tratamiento de la “Chinela» y en cualquier otra infección donde este indicado el tratamiento sulfamídico. ' }
];


// Agregar cada producto al DOM
productsNovedades.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc, product.descripProdu);
    productListNovedades.appendChild(productElement);
});

