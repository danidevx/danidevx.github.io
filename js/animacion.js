document.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.elemento');
    
    elementos.forEach((elemento) => {
        const position = elemento.getBoundingClientRect().top;

        // Si el elemento está visible en la ventana
        if (position < window.innerHeight) {
            elemento.style.opacity = '1'; // Hacer visible
            elemento.style.transform = 'translateY(0)'; // Mover a su posición original
        }
    });
});
