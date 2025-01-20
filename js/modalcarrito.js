document.getElementById('carrito').onclick = function(event) {
    event.preventDefault(); // Prevenir la acción por defecto del enlace
    document.getElementById('cartModal').style.display = "block"; // Mostrar el modal
};

// Cerrar el modal al hacer clic en la 'X'
document.querySelector('.close').onclick = function() {
    document.getElementById('cartModal').style.display = "none";
};

// Enviar productos por WhatsApp
document.getElementById('whatsappButton').onclick = function() {
    const products = ["Producto 1", "Producto 2"]; // Aquí deberías obtener los productos dinámicamente
    const message = encodeURIComponent("Mis productos en el carrito:\n" + products.join("\n"));
    const whatsappNumber = "04120588764";
    
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
};

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = "none";
    }
};


