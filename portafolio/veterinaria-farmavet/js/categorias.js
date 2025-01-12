function Categorias (name, img) {
	const Categoria = document.createElement('div')
	Categoria.className = 'product-itemm';

	Categoria.innerHTML = `

	<div id="categorias" >
		<a href="#"><img src="${img}" alt="${name}"></a>
    </div>
	`
return Categoria;

}

const listCategorias = document.getElementById('listCategorias')

const category = [

	

	{  img: 'img/categorias/Analgesicos.png' },
	{  img: 'img/categorias/Antiinflamatorios.png' },
	{  img: 'img/categorias/Antipireticos.png' },
	{  img: 'img/categorias/Anestesicos.jpg' },
    {  img: 'img/categorias/Antianemicos.png' },
    {  img: 'img/categorias/Antibioticos.jpg' },
    {  img: 'img/categorias/Antidiarreicos.png' },
    {  img: 'img/categorias/Antihistaminicos.png' },
    {  img: 'img/categorias/Antiparasitarios.png' },
    {  img: 'img/categorias/Biologicos.png' },
    {  img: 'img/categorias/Hormonales.png' },
    {  img: 'img/categorias/Multivitaminicos.png' }


// 1. Analgésicos/Antiinflamatorios/Antipiréticos.
// 2. Anestésicos.
// 3. Antianémicos.
// 4. Antibióticos.
// 5. Antidiarréicos.
// 6. Antihistamínicos
// 7. Antiparasitarios Orales/Inyectables.
// 8. Biológicos.
// 9. Hormonales.
// 10. Multivitamínicos.
// 11. Otros.

];

category.forEach(product => {
    const productElement = Categorias(product.name, product.img);
    listCategorias.appendChild(productElement);
});