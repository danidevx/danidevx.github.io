// productrecomendamos.js
const productListRecomendamos = document.getElementById('product-listrecomendamos');

// Ejemplo de productos recomendados
const productsRecomendados = [
    { name: 'ANTRIFORMINT FM ®', imageSrc: 'img/product/reme1.png', descripProdu: 'Descripción de SONENIX 150®' },
    { name: 'ANTRIBAM 4G ®', imageSrc: 'img/product/atriban.png', descripProdu: 'Descripción de SONENIX 150®' },
    { name: 'ASCEND', imageSrc: 'img/product/ascend.png', descripProdu: 'Descripción de SONENIX 150®' },
    { name: 'ENROFLOXACINA 10% ®', imageSrc: 'img/product/enrofloxasina.png', descripProdu: 'Descripción de SONENIX 150®' },
    { name: 'FLUXIPEN ®', imageSrc: 'img/product/fluxipen.png', descripProdu: 'Descripción de SONENIX 150®' },
    { name: 'RESANIQ ®', imageSrc: 'img/product/RESANIQ.png', descripProdu: 'Descripción de SONENIX 150®' }
];

// Agregar cada producto al DOM
productsRecomendados.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc, product.descripProdu);
    productListRecomendamos.appendChild(productElement);
});
