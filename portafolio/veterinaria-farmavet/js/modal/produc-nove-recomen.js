function showProductDetails(name, imageSrc, descripProdu) {
    document.getElementById('productName').textContent = name;
    document.getElementById('productImage').src = imageSrc;
    document.getElementById('productDescription').textContent = descripProdu;

    const modal = document.getElementById('productDetailModal');
    modal.style.display = "block"; // Mostrar el modal
}

// Cerrar el modal al hacer clic en la "x"
document.querySelector('.close-detail').onclick = function() {
    document.getElementById('productDetailModal').style.display = "none";
};

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('productDetailModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
