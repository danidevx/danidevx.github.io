// productnovedades.js
const productListNovedades = document.getElementById('product-listrenovedades');

// Ejemplo de productos novedades (puedes usar los mismos o diferentes)
const productsNovedades = [
    { name: 'SONENIX 150®', imageSrc: 'img/product-novedades/sonenix.png' },
    { name: 'ENOMETROL®', imageSrc: 'img/product-novedades/Enometrol.png' },
    { name: 'AMOXIGEN', imageSrc: 'img/product-novedades/amoxigen.png' },
    { name: 'OXITETRACICLINA AL 5%', imageSrc: 'img/product-novedades/OXITETRACICLINA.png' },
    { name: 'FLORFENICOL L.A.', imageSrc: 'img/product-novedades/FLORFENICOL.png' },
    { name: 'SULFACET', imageSrc: 'img/product-novedades/SULFACET.png' }
]
;

// Agregar cada producto al DOM
productsNovedades.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc);
    productListNovedades.appendChild(productElement);
});
