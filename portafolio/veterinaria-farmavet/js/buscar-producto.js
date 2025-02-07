// Función para manejar la búsqueda de productos
document.getElementById('buscar').onsubmit = function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const searchText = event.target['search-text'].value.toLowerCase(); // Obtener el texto de búsqueda
    const allProducts = [...updatedProductsAll]; // Combinar productos recomendados y novedades

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
        document.getElementById('searchModal').style.display = "block"; // Mostrar el modal de búsqueda
    } else {
        searchResultsList.innerHTML = '<li>No se encontraron productos.</li>'; // Mensaje si no hay resultados
        document.getElementById('searchModal').style.display = "block"; // Mostrar el modal de búsqueda
    }
};

// Cerrar el modal de búsqueda al hacer clic en la 'X'
document.querySelector('.close-search').onclick = function () {
    document.getElementById('searchModal').style.display = "none";
};

// Cerrar el modal de detalles al hacer clic en la 'X' (usando el ID 'lon')
document.getElementById('lon').onclick = function () {
    document.getElementById('detailModal').style.display = "none";
    document.getElementById('searchModal').style.display = "block"; // Mostrar el modal de búsqueda
};

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target == document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = "none";
    }
    if (event.target == document.getElementById('detailModal')) {
        document.getElementById('detailModal').style.display = "none";
        document.getElementById('searchModal').style.display = "block"; // Mostrar el modal de búsqueda
    }
};

// Función para mostrar los detalles del producto
function showProductDetail(product) {
    const productDetailContent = document.getElementById('productDetailContent');

    // Llenar la sección de detalles con la información del producto
    productDetailContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.imageSrc}" alt="${product.name}" style="max-width: 100%; height: auto;">
        <div>${product.descripProdu}</div>
    `;

    // Mostrar el modal de detalles y ocultar el modal de búsqueda
    document.getElementById('detailModal').style.display = "block";
    document.getElementById('searchModal').style.display = "none";
}

// Evento para mostrar los detalles del producto al hacer clic en un enlace
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('product-link')) {
        event.preventDefault();
        const productName = event.target.textContent;
        const allProducts = [...updatedProductsAll];
        const selectedProduct = allProducts.find(product => product.name === productName);
        if (selectedProduct) {
            showProductDetail(selectedProduct);
        }
    }
});