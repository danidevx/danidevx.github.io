document.getElementById('buscar').onsubmit = function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const searchText = event.target['search-text'].value.toLowerCase(); // Obtener el texto de búsqueda
    const allProducts = [...productsRecomendados, ...productsNovedades]; // Combinar productos recomendados y novedades

    // Filtrar productos que coincidan con el texto de búsqueda
    const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchText));

    // Limpiar la lista actual en el modal de búsqueda
    const searchResultsList = document.getElementById('searchResultsList');
    searchResultsList.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los productos filtrados en el nuevo modal
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" class="product-link">${product.name}</a>`;
            searchResultsList.appendChild(listItem);
        });
        
        // Mostrar el modal de búsqueda con los resultados
        document.getElementById('searchModal').style.display = "block"; // Mostrar el modal
    } else {
        searchResultsList.innerHTML = '<li>No se encontraron productos.</li>'; // Mensaje si no hay resultados
        document.getElementById('searchModal').style.display = "block"; // Mostrar el modal
    }
};

// Cerrar el modal de búsqueda al hacer clic en la 'X'
document.querySelector('.close-search').onclick = function() {
    document.getElementById('searchModal').style.display = "none";
};

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = "none";
    }
};

// Cerrar el modal del carrito al hacer clic en la 'X'
document.querySelector('.close').onclick = function() {
    document.getElementById('cartModal').style.display = "none";
};

// Cerrar el modal del carrito si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = "none";
    }
};


// Función para mostrar los detalles del producto
function showProductDetail(product) {
    const productDetailSection = document.getElementById('productDetailSection');
    const productDetailContent = document.getElementById('productDetailContent');

    // Llenar la sección de detalles con la información del producto
    productDetailContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.imageSrc}" alt="${product.name}" style="max-width: 100%; height: auto;">
        <div>${product.descripProdu}</div>
    `;

    // Ocultar la lista de productos y mostrar los detalles
    document.getElementById('productListSection').style.transform = 'translateX(-100%)';
    productDetailSection.classList.remove('hidden');
    productDetailSection.classList.add('visible');
}

// Función para volver a la lista de productos
function backToProductList() {
    const productDetailSection = document.getElementById('productDetailSection');

    // Ocultar los detalles y mostrar la lista de productos
    document.getElementById('productListSection').style.transform = 'translateX(0)';
    productDetailSection.classList.remove('visible');
    productDetailSection.classList.add('hidden');
}

// Evento para mostrar los detalles del producto al hacer clic en un enlace
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('product-link')) {
        event.preventDefault();
        const productName = event.target.textContent;
        const allProducts = [...productsRecomendados, ...productsNovedades];
        const selectedProduct = allProducts.find(product => product.name === productName);
        if (selectedProduct) {
            showProductDetail(selectedProduct);
        }
    }
});

// Evento para volver a la lista de productos al hacer clic en la flecha de retroceso
document.querySelector('.back-arrow').addEventListener('click', backToProductList);

// Mostrar el modal de búsqueda
document.getElementById('buscar').onsubmit = function (event) {
    event.preventDefault();
    const searchText = event.target['search-text'].value.toLowerCase();
    const allProducts = [...productsRecomendados, ...productsNovedades];
    const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchText));

    const searchResultsList = document.getElementById('searchResultsList');
    searchResultsList.innerHTML = '';

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" class="product-link">${product.name}</a>`;
            searchResultsList.appendChild(listItem);
        });
        document.getElementById('searchModal').style.display = "flex"; // Mostrar el modal
    } else {
        searchResultsList.innerHTML = '<li>No se encontraron productos.</li>';
        document.getElementById('searchModal').style.display = "flex"; // Mostrar el modal
    }
};

// Cerrar el modal al hacer clic en la 'X'
document.querySelector('.close-search').onclick = function () {
    document.getElementById('searchModal').style.display = "none";
};

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target == document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = "none";
    }
};
