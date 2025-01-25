document.getElementById('hamburger').onclick = function(event) {
    const navList = document.getElementById('navList');
    
    // Alternar la visibilidad del menú
    if (navList.style.display === 'flex') {
        navList.style.display = 'none'; // Ocultar si está visible
    } else {
        navList.style.display = 'flex'; // Mostrar si está oculto
    }
    
    // Prevenir que el evento de clic se propague al documento
    event.stopPropagation();
};

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const navList = document.getElementById('navList');
    const hamburger = document.getElementById('hamburger');

    // Verificar si el clic fue fuera del menú y del botón de hamburguesa
    if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
        navList.style.display = ''; // Ocultar el menú
    }
});


