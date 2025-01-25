// product.js

const cartItems = []; 

function createProduct(name, imageSrc, descripProdu) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    
    productItem.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h3>${name}</h3>
        <a href="#" class="add-to-cart">Agregar al carrito</a>
    `;
    
    // Agregar evento de clic al botón "Agregar al carrito"
    productItem.querySelector('.add-to-cart').onclick = function(event) {
        event.preventDefault(); // Prevenir la acción por defecto
        event.stopPropagation(); // Evitar que se dispare el evento del contenedor
        addToCart(name, imageSrc); // Llamar a la función para agregar al carrito
    };

    // Agregar evento de clic para mostrar detalles del producto
    productItem.onclick = function(event) {
        showProductDetails(name, imageSrc, descripProdu); // Mostrar detalles del producto
    };

    return productItem;
}



// Función para agregar un producto al carrito
function addToCart(name, imageSrc) {
    const product = { name, imageSrc };
    cartItems.push(product); // Agregar el producto al array del carrito
    updateCartModal(); // Actualizar el modal del carrito
}

// Función para actualizar el modal con los productos en el carrito
function updateCartModal() {
    const productList = document.getElementById('productList');
    productList.className = 'stil-li';
    productList.innerHTML = ''; // Limpiar la lista actual

    cartItems.forEach(item => {
        const listItem = document.createElement('li');

        listItem.textContent = item.name; // Mostrar solo el nombre del producto
        productList.appendChild(listItem);
    });
}
