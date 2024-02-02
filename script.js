const button = document.querySelector(".button");
const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-port nav");
const url = "https://node-name.vercel.app";

addAPI();
function addAPI() {
    
    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then((data) => {

        showSites(data);
            
        })
        .catch((err => {
            console.log(err)
        }));
}

function showSites(lista) {
    let html = '';

    for (const i in lista) {
        html += `<div class='content'>
                    <h2>${lista[i].name}</h2>
                    <a href='${lista[i].linkSite}' target='_blank'><img src='${lista[i].imagePath}'/></a>
                    <p>${lista[i].description}</p>
                </div>`
    }
    document.querySelector(".container").innerHTML = html;
}

function menuToggle() {
    nav.classList.toggle('nav-width');
}

menu.addEventListener('click', menuToggle);


function onScrollPage(id) {
    const header = document.querySelector('.header-port').getBoundingClientRect().height + 15;
    const tag = document.querySelector(id);
    const position = tag?.getBoundingClientRect().top + window.scrollY - header;

    // Rola até o elemento
    window.scrollTo({
        behavior: 'smooth',
        top: id === '#home'? 0 : position
    });

    menuToggle()
}