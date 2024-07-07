// Creación de la cabecera
const footerContainer = document.createElement('footer');
const navegacion = document.createElement('nav');
const nav = document.createElement('ul');
footerContainer.appendChild(navegacion);
navegacion.appendChild(nav);
navegacion.className = 'navbar';

// Estilos, agregar a laos productos
footerContainer.style.backgroundColor = '#023766';
document.body.style.backgroundColor = "#f3dbc3";


// Agregar la cabecera al cuerpo del documento
document.body.appendChild(footerContainer);

// Páginas
const links = ["Instagram", "Whatsapp", "Gmail"];


// Recorrer las páginas y asignarles un href
for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    nav.appendChild(li);
}
