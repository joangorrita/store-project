const footerContainer = document.createElement('footer');
const navegacion = document.createElement('nav');
const nav = document.createElement('ul');
footerContainer.appendChild(navegacion);
navegacion.appendChild(nav);
navegacion.className = 'navbar';


footerContainer.style.backgroundColor = '#023766';
document.body.style.backgroundColor = "#f3dbc3";



document.body.appendChild(footerContainer);


const links = ["Instagram", "Whatsapp", "Gmail"];



for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html">${link}</a>`;
    nav.appendChild(li);
}
