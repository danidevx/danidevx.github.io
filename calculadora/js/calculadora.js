// Función para cambiar el idioma
document.getElementById('language-toggle').addEventListener('change', function() {
    const isEnglish = this.checked;
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        if (element.getAttribute('data-lang') === (isEnglish ? 'en' : 'es')) {
            element.style.display = 'block'; // Mostrar elementos del idioma seleccionado
        } else {
            element.style.display = 'none'; // Ocultar elementos del otro idioma
        }
    });
});

// Función para calcular el precio
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);
    const cityType = document.getElementById('city-type').value;

    let totalPrice;

    if (cityType === 'orlando-new') {
        totalPrice = vehiclePrice * 1.065 + 938.35;
    } else if (cityType === 'orlando-transfer') {
        totalPrice = vehiclePrice * 1.065 + 693.75;
    } else if (cityType === 'other-cities') {
        totalPrice = vehiclePrice * 1.07;
    }

    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
});

// Función para limpiar el formulario
document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('calculator-form').reset();
    document.getElementById('total-price').textContent = '$0.00';
});