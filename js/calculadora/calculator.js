function calcularDosis(part) {
  // Obtener los valores de entrada
  const dosisTerapeutica = parseFloat(document.getElementById(`dosisTerapeutica${part}`).value);
  const pesoVivo = parseFloat(document.getElementById(`pesoVivo${part}`).value);
  const concentracionProducto = parseFloat(document.getElementById(`concentracionProducto${part}`).value);

  // Aplicar la fórmula
  const resultado = (dosisTerapeutica * pesoVivo) / concentracionProducto;

  // Mostrar el resultado
  document.getElementById(`resultado${part}`).innerText = `Resultado: ${resultado.toFixed(2)}`;
}