let cartCount = 0;
let cartItems = [];
let cartTotal = 0;

// Función para cargar carrito desde localStorage
function loadCartFromStorage() {
    const storedCart = localStorage.getItem('naturaCart');
    if (storedCart) {
        cartItems = JSON.parse(storedCart);
        updateCartCount();
        updateCartDisplay();
    }
}

// Función para guardar carrito en localStorage
function saveCartToStorage() {
    localStorage.setItem('naturaCart', JSON.stringify(cartItems));
}

// Función para implementar lazy loading con IntersectionObserver
function implementLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Solo cargar si no tiene src ya asignado
                    if (!img.src || img.src.includes('data:')) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => {
            // Mover src a data-src para lazy loading
            if (img.dataset.src && !img.src) {
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+'; // Placeholder
            }
            imageObserver.observe(img);
        });
    } else {
        // Fallback: load all images immediately
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }
}

// Inicializar al cargar la página
window.addEventListener('load', () => {
    loadCartFromStorage();
    implementLazyLoading();
});

// Sistema de cursor personalizado
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Efectos de hover para el cursor
document.querySelectorAll('button, .tab, .cart, .product-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.3)';
        cursorFollower.style.borderColor = 'rgba(255, 255, 255, 0.8)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    });
});

// Función para cerrar productos expandidos y remover blur
function closeExpanded() {
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('expanded'));
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.background').classList.remove('blurred');
}

// Función para cambiar pestañas
function switchTab(tabElement) {
    // Cerrar cualquier producto expandido antes de cambiar de pestaña
    closeExpanded();
    
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    tabElement.classList.add('active');
    document.getElementById(tabElement.dataset.tab).classList.add('active');
}

// Cambiar entre tabs al hacer clic
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        switchTab(this);
    });
});

// Cambiar entre tabs al pasar el cursor
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('mouseenter', function() {
        switchTab(this);
    });
});

let isExpanding = false;

// Expandir al hacer hover sobre producto
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (isExpanding) return;
        
        const overlay = document.querySelector('.overlay');
        const background = document.querySelector('.background');
        
        // Cerrar cualquier expandido
        document.querySelectorAll('.product-card').forEach(c => c.classList.remove('expanded'));
        
        // Expandir el actual
        this.classList.add('expanded');
        overlay.classList.add('active');
        background.classList.add('blurred'); // MODIFICADO: aplicar blur solo al fondo
        isExpanding = true;
        
        // Resetear flag después de la animación
        setTimeout(() => {
            isExpanding = false;
        }, 600);
    });
});

// Agregar al carrito
function addToCart(event, productName, price, imageUrl) {
    event.stopPropagation();
    
    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.name === productName);
    
    if (existingItem) {
        // Si ya existe, aumentar la cantidad
        existingItem.quantity += 1;
    } else {
        // Si no existe, agregar nuevo producto
        cartItems.push({
            name: productName,
            price: price,
            quantity: 1,
            imageUrl: imageUrl
        });
    }
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Animación del carrito
    const cart = document.querySelector('.cart');
    cart.style.transform = 'scale(1.15)';
    setTimeout(() => {
        cart.style.transform = 'scale(1)';
    }, 300);
}

// Actualizar contador del carrito
function updateCartCount() {
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
    saveCartToStorage(); // Guardar cambios en localStorage
}

// Mostrar carrito
function showCart() {
    const cartModal = document.querySelector('.cart-modal');
    const cartOverlay = document.querySelector('.cart-modal-overlay');
    const background = document.querySelector('.background');
    
    // Aplicar blur al fondo
    background.classList.add('blurred');
    
    // Mostrar modal y overlay
    cartModal.classList.add('active');
    cartOverlay.classList.add('active');
    
    // Actualizar contenido del carrito
    updateCartDisplay();
}

// Cerrar carrito
function closeCart() {
    const cartModal = document.querySelector('.cart-modal');
    const cartOverlay = document.querySelector('.cart-modal-overlay');
    const background = document.querySelector('.background');
    
    // Quitar blur del fondo
    background.classList.remove('blurred');
    
    // Ocultar modal y overlay
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Actualizar visualización del carrito
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Limpiar contenedor
    cartItemsContainer.innerHTML = '';
    
    // Calcular total
    cartTotal = 0;
    
    if (cartItems.length === 0) {
        // Mostrar mensaje de carrito vacío
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        // Mostrar elementos del carrito
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} c/u</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn remove" onclick="decreaseQuantity(${index})">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    // Actualizar total
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Aumentar cantidad de un producto
function increaseQuantity(index) {
    cartItems[index].quantity += 1;
    updateCartCount();
    updateCartDisplay();
}

// Disminuir cantidad de un producto
function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        // Si la cantidad es 1, eliminar producto
        cartItems.splice(index, 1);
    }
    updateCartCount();
    updateCartDisplay();
}

// Finalizar compra
function checkout() {
    if (cartItems.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    alert(`¡Gracias por tu compra! Total: $${cartTotal.toFixed(2)}`);
    
    // Vaciar carrito
    cartItems = [];
    updateCartCount();
    updateCartDisplay();
    closeCart();
}

// Cerrar con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeExpanded();
        closeCart();
    }
});
