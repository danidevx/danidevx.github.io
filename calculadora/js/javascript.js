// Constantes
const FEE = 500;
const ELECTRONIC_FEE = 37;
const ORLANDO_TAX_RATE = 0.06; // 6%
const ORLANDO_ADDITIONAL_TAX_RATE = 0.005; // 0.5%
const ORLANDO_ADDITIONAL_TAX_MAX = 25; // Máximo de $25
const OTHER_CITIES_TAX_RATE = 0.07; // 7%
const OTHER_CITIES_ADDITIONAL_TAX_RATE = 0.005; // 0.5%
const OTHER_CITIES_ADDITIONAL_TAX_MAX = 50; // Máximo de $50
const TRANSFER_FEE = 5;
const RENEWAL_FEE = 54;
const NEW_PLATE_FEE = 289.10;
const TITLE_FEE = 87.75;

// Mostrar u ocultar renovación según la selección
document.getElementById('transfer-or-plate').addEventListener('change', function() {
    const transferOrPlate = this.value;
    const renewalGroup = document.getElementById('renewal-group');
    const newPlateGroup = document.getElementById('new-plate-group');

    if (transferOrPlate === "transfer") {
        renewalGroup.style.display = "block";
        newPlateGroup.style.display = "none";
    } else {
        renewalGroup.style.display = "none";
        newPlateGroup.style.display = "block";
    }
});

// Función para calcular el precio OTD
function calculateOTD(vehiclePrice, cityType, includeFee, includeElectronicFee, includeTransfer, includeRenewal, includeNewPlate, includeTitle) {
    let total = vehiclePrice;

    if (includeFee) total += FEE;
    if (includeElectronicFee) total += ELECTRONIC_FEE;

    // Impuestos
    if (cityType === "orlando") {
        const taxes = total * ORLANDO_TAX_RATE;
        const additionalTax = Math.min(total * ORLANDO_ADDITIONAL_TAX_RATE, ORLANDO_ADDITIONAL_TAX_MAX);
        total += taxes + additionalTax;
    } else {
        const taxes = total * OTHER_CITIES_TAX_RATE;
        const additionalTax = Math.min(total * OTHER_CITIES_ADDITIONAL_TAX_RATE, OTHER_CITIES_ADDITIONAL_TAX_MAX);
        total += taxes + additionalTax;
    }

    // Transfer o Renovación
    if (includeTransfer) total += TRANSFER_FEE;
    if (includeRenewal) total += RENEWAL_FEE;

    // Placa Nueva
    if (includeNewPlate) total += NEW_PLATE_FEE;

    // Título
    if (includeTitle) total += TITLE_FEE;

    return total;
}

// Función para manejar el envío del formulario
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);
    const cityType = document.getElementById('city-type').value;
    const includeFee = document.getElementById('include-fee').checked;
    const includeElectronicFee = document.getElementById('include-electronic-fee').checked;
    const includeTransfer = document.getElementById('transfer-or-plate').value === "transfer";
    const includeRenewal = document.getElementById('include-renewal').checked;
    const includeNewPlate = document.getElementById('include-new-plate').checked;
    const includeTitle = document.getElementById('include-title').checked;

    if (isNaN(vehiclePrice)) {
        alert("Por favor, ingresa un precio válido.");
        return;
    }

    const totalOTD = calculateOTD(vehiclePrice, cityType, includeFee, includeElectronicFee, includeTransfer, includeRenewal, includeNewPlate, includeTitle);
    document.getElementById('total-price').textContent = `$${totalOTD.toFixed(2)}`;
});

// Función para limpiar el formulario
document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('calculator-form').reset();
    document.getElementById('total-price').textContent = '$0.00';
    document.getElementById('renewal-group').style.display = "none"; // Ocultar renovación al limpiar
    document.getElementById('new-plate-group').style.display = "block"; // Mostrar placa nueva al limpiar
});