'use strict';

// Get the mode toggle button and mode icon
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Function to toggle between light and dark mode
function toggleDarkMode() {
  const themeLink = document.getElementById('theme-link');
  if (themeLink.href.includes('lightmode.css')) {
    themeLink.href = './assets/css/darkmode.css'; // Switch to dark mode CSS
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
    modeIcon.style.color = '#fff'; // Change icon color for dark mode
  } else {
    themeLink.href = './assets/css/lightmode.css'; // Switch to light mode CSS
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
    modeIcon.style.color = '#333'; // Change icon color for light mode
  }
}

// Add event listener to the mode toggle button
modeToggle.addEventListener('click', toggleDarkMode);



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal open function
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables for portfolio filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]"); // Ojo: "selecct" tiene doble 'c' aquí, asegúrate que en HTML sea igual
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Función de normalización para cadenas (quita tildes, convierte a minúsculas, reemplaza espacios por guiones)
const normalizeString = function (str) {
  return str.toLowerCase()
            .normalize("NFD") // Normaliza caracteres Unicode
            .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos (tildes)
            .replace(/\s+/g, "-"); // Reemplaza uno o más espacios por un guión
};

// add event in all select items for dropdown filter
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = normalizeString(this.innerText); // APLICAR NORMALIZACIÓN AQUÍ
    selectValue.innerText = this.innerText; // Mantener el texto original en el display
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    // CAMBIO: 'all' a 'todo' para la comparación
    if (selectedValue === "todo") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0]; // Asegura que el primer botón esté activo al cargar

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = normalizeString(this.innerText); // APLICAR NORMALIZACIÓN AQUÍ
    selectValue.innerText = this.innerText; // Mantener el texto original en el display
    filterFunc(selectedValue);

    // Asegura que solo el botón clickeado tenga la clase 'active' para el estilo visual
    if (lastClickedBtn) { // Verificar si lastClickedBtn existe antes de intentar remover la clase
        lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;
  });
}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // 'this' aquí es el elemento 'button' o 'a' del navbar que fue clickeado.
    const clickedNavLinkText = this.innerHTML.toLowerCase(); // Obtenemos el texto del botón clickeado.

    // Desactivar todas las páginas y todos los botones de navegación
    // (Esto asegura que solo la página correcta y el botón clickeado queden activos)
    for (let k = 0; k < pages.length; k++) {
      pages[k].classList.remove("active");
    }
    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }

    // Iterar sobre todas las páginas para encontrar la que coincide con el botón clickeado
    for (let j = 0; j < pages.length; j++) {
      // Comparamos el texto del botón clickeado con el 'data-page' de cada página
      if (clickedNavLinkText === pages[j].dataset.page) {
        pages[j].classList.add("active"); // Activa la página correspondiente
        window.scrollTo(0, 0); // Opcional: desplazar al inicio de la página
        break; // Una vez que la encontramos y la activamos, no necesitamos seguir buscando
      }
    }

    // Finalmente, activa el botón de navegación que fue clickeado
    this.classList.add("active");

  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Encuentra el enlace de navegación "Apps" y haz clic en él
  const appsNavLink = document.querySelector('.navbar-link[data-nav-link][data-page="apps"]');
  if (appsNavLink) {
    appsNavLink.click();
  }

  // Encuentra el botón de filtro "Todo" y haz clic en él para mostrar todos los proyectos
  const todoFilterButton = document.querySelector('.filter-list .filter-item button.active'); // Esto apunta al botón 'Todo' asumiendo que es el primero y está inicialmente activo
  if (todoFilterButton) {
    todoFilterButton.click();
  }
});