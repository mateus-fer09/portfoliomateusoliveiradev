import projetos from "../data/projetos.js";
import habilidades from "../data/habildades.js";

/* Abrir e fechar o menu mobile */
const buttonOpenNav = document.getElementById("open-nav")
const buttonCloseNav = document.getElementById("close-nav")
const ancoras = document.querySelectorAll(".ancora")
const nav = document.querySelector(".navigation")

function openNav() {
    nav.style.width = "330px"
}

function closeNav() {
    nav.style.width = "0px"
}

function closeNavAncora() {
    if (window.innerWidth <= 1000) {
        nav.style.width = "0px"
    }
    
}

buttonOpenNav.addEventListener("click", openNav)
buttonCloseNav.addEventListener("click", closeNav)
ancoras.forEach((Element) => {
    Element.addEventListener("click", closeNavAncora)
})

/* exibir as habilidades na página */



const skillContent = document.querySelector(".card-habilidades");

function exibirHabilidades() {
    habilidades.forEach((item) => {
        skillContent.innerHTML += `
            <div class="habilidade">
                <div class="headline">
                    <span style="font-weight: bold;">${item.linguagem}</span>
                    <span style="color: #7e7e7e;">${item.xp}</span>
                </div>
                <div class="range">
                    <div class="range-content ${item.status}" style="width: ${item.xp};"></div>
                </div>
                <p style="text-align: center; margin-top: 20px; font-size: 0.9em; color: #7e7e7e;">Atualizado em ${item.data}</p>
            </div>
        `;
    });
}

exibirHabilidades();

const projetosContent = document.querySelector(".content-projetos")

function exibirProjetos() {
    projetos.forEach((item) => {
        projetosContent.innerHTML += `
            <div class="projeto">
                <div class="banner">
                    <img src="${item.banner}" alt="banner do projeto">
                </div>
                <div class="headline">
                    <h2>${item.titulo}</h2>
                    <p>${item.descricao}</p>
                    
                    <div class="tecnologias">
                    ${item.tecnologias.map(tech => `<span>${tech}</span>`).join("")}
                    </div>

                    <div class="buttons-action">
                        <button onclick="window.open('${item.link_repositorio}', '_blank')">
                        <i class="bi bi-github"></i>
                        <span>Código</span>
                    </button>
                    <button class="demo" onclick="window.open('${item.link_demo}', '_blank')">
                        <i class="bi bi-box-arrow-up-right"></i>
                        <span>Demo</span>
                    </button>
                    </div>
                </div>
            </div>
        `
    })
}

exibirProjetos()