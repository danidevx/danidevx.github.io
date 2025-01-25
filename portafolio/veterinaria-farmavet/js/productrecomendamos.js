// productrecomendamos.js
const productListRecomendamos = document.getElementById('product-listrecomendamos');

// Ejemplo de productos recomendados
const productsRecomendados = [
    { name: 'ANTRIFORMINT FM ®', imageSrc: 'img/product/reme1.png' },
    { name: 'ANTRIBAM 4G ®', imageSrc: 'img/product/atriban.png' },
    { name: 'ASCEND', imageSrc: 'img/product/ascend.png' },
    { name: 'ENROFLOXACINA 10% ®', imageSrc: 'img/product/enrofloxasina.png' },
    { name: 'FLUXIPEN ®', imageSrc: 'img/product/fluxipen.png' },
    { name: 'RESANIQ ®', imageSrc: 'img/product/RESANIQ.png' }
];

// Agregar cada producto al DOM
productsRecomendados.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc);
    productListRecomendamos.appendChild(productElement);
});
