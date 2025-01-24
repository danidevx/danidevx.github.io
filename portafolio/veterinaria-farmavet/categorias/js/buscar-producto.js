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

// // Cerrar el modal del carrito al hacer clic en la 'X'
// document.querySelector('.close').onclick = function() {
//     document.getElementById('cartModal').style.display = "none";
// };

// Cerrar el modal del carrito si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = "none";
    }
};
