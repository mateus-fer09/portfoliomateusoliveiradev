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

function CV() {
    const buttonCV = document.querySelector(".btn-cv");
    const contentCV = document.querySelector(".cv-box");
  
    const exibir = () => {
        const currentWidth = window.getComputedStyle(contentCV).width;
        if (currentWidth === "0px") {
            contentCV.style.width = "500px";
        } else {
            contentCV.style.width = "0px";
        }
    };
  
    buttonCV.addEventListener("click", exibir);
}

CV()


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

const projetosContent = document.querySelector(".content-projetos");

function exibirProjetos() {
    // Limpa o conteúdo antes de adicionar (evita duplicação)
    projetosContent.innerHTML = '';
    
    projetos.forEach((item) => {
        const projetoHTML = `
            <div class="projeto" style="background-image: url('${item.imagem}'); background-repeat: no-repeat; background-size: cover; background-position: top center;">
                <div class="info-drop">
                    <h4>${item.titulo}</h4>
                    <p>${item.descricao}</p>
                    <button class="${item.classButton} btn-open-projeto" data-id="${item.id}">Ver mais</button>
                </div>
            </div>
        `;
        
        projetosContent.insertAdjacentHTML('beforeend', projetoHTML);
    });

    // Adiciona event listeners aos botões
    document.querySelectorAll('.btn-open-projeto').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            abrirDetalhesProjeto(id);
        });
    });
}

function abrirDetalhesProjeto(id) {
    const projeto = projetos.find(p => p.id == id);
    if (projeto) {
        // Redireciona para projeto.html com o ID na URL
        window.location.href = `detalhes-do-projeto.html?id=${id}`;
    }
}

exibirProjetos();