const projetos = [
     {
        id: 0,
        url_img: "../Assets/img/projetos/controlly/banner.png",
        name: "Controlly",
        description: "Sistema de controle financeiro, para controlar receitas e gastos.",
        ancoraEnter: "https://controlly.vercel.app",
        repositorio: "https://github.com/mateus-fer09/controlly"
    } 
];

const exibirProjetos = () => {
    let container = document.querySelector(".projeto");
    container.innerHTML = ''; // Limpa o container antes de adicionar novos projetos

    if (projetos.length === 0) {
        // Verifica se o array de projetos está vazio
        container.innerHTML = '<p>Nenhum projeto no momento.</p>';
    } else {
        // Se houver projetos, exibe cada um deles
        projetos.forEach((val) => {
            container.innerHTML += `
            <div class="card-projeto"
            style="background-image: url('${val.url_img}'); background-repeat: no-repeat; background-size: cover; background-position: center;">
                <div class="card-projeto-content">
                    <h3>${val.name}</h3>
                    <p>${val.description}</p>
                    <div class="box-buttons">
                        <a href="${val.ancoraEnter}" target="_blank">
                            <i class="bi bi-eye"></i>
                            <button>Acessar projeto</button>
                        </a>
                        <a href="${val.repositorio}" target="_blank">
                            <i class="bi bi-github"></i>
                            <button>Acessar repositório</button>
                        </a>
                    </div>
                </div>
            </div>
            `;
        });
    }
};

// Chama a função para exibir os projetos
exibirProjetos();
