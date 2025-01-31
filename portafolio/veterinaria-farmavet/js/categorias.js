function Categorias (name, img, url) {
	const Categoria = document.createElement('div')
	Categoria.className = 'product-itemm';

	Categoria.innerHTML = `

	<div id="categorias" >
		<a href="${url}"><img src="${img}" alt="${name}"></a>
    </div>
	`
return Categoria;

}

const listCategorias = document.getElementById('listCategorias')

const category = [

	

	{ name: 'Analgésicos',  img: 'img/categorias/Analgesicos.png', url: 'categorias/analgesicos.html' },
	{ name: 'Analgésicos', img: 'img/categorias/Antiinflamatorios.png', url: 'categorias/analgesicos.html'  },
	{ name: 'Analgésicos', img: 'img/categorias/Antipireticos.png', url: 'categorias/analgesicos.html'  },
	{ name: 'Analgésicos', img: 'img/categorias/Anestesicos.jpg', url: 'categorias/anestesicos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Antianemicos.png', url: 'categorias/antianemicos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Antibioticos.jpg', url: 'categorias/antibioticos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Antidiarreicos.png', url: 'categorias/antidiarreicos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Antihistaminicos.png', url: 'categorias/antihistaminicos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Antiparasitarios.png', url: 'categorias/antiparasitariosoralesinyectable.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Biologicos.png', url: 'categorias/biologicos.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Hormonales.png', url: 'categorias/hormonales.html'  },
    { name: 'Analgésicos', img: 'img/categorias/Multivitaminicos.png', url: 'categorias/multivitaminicos.html'  }


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
    const productElement = Categorias(product.name, product.img, product.url);
    listCategorias.appendChild(productElement);
});