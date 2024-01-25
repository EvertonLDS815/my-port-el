const button = document.querySelector(".button");
const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".header-port nav");
const url = 'https://node-name.vercel.app';

add()
function add() {
    
    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then((data) => {

        montarBlog(data);
            
        })
        .catch((err => {
            console.log(err)
        }))
}

function montarBlog(lista) {
    let html = '';

    for (const i in lista) {
        html += `<div class='content'>
                    <h2>${lista[i].name}</h2>
                    <a href='${lista[i].linkSite}' target='_blank'><img src='${lista[i].imagePath}'/></a>
                    <p>${lista[i].description}</p>
                </div>`
    }
    document.querySelector(".container").innerHTML = html
}
function closeMenu() {
    nav.style.width = "0";
    // overlay.style.display = "none";
}

function menuToggle() {
    if(nav.style.width === "170px") {
        closeMenu();
    } else {
        nav.style.width = "170px";
        // overlay.style.display = "block";
    }
}

menu.addEventListener('click', menuToggle)