const projetos = [
    /* {
        id: 0,
        url_img: "https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg",
        name: "Cardápio Online",
        description: "Cardápio online onde os clientes podem adicionar produtos ao carrinho e finalizar o pedido diretamente pelo WhatsApp com tudo já calculado.",
        ancoraEnter: "https://youtube.com",
        repositorio: "https://google.com"
    } */
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
                        <a href="${val.ancoraEnter}">
                            <i class="bi bi-eye"></i>
                            <button>Acessar projeto</button>
                        </a>
                        <a href="${val.repositorio}">
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
