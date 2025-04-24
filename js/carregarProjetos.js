import projetos from '../data/projetos.js';

document.addEventListener('DOMContentLoaded', () => {
    const detalhesProjeto = document.querySelector('.detalhes-projetos');
    
    // Obtém o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const projetoId = urlParams.get('id');
    
    if (projetoId) {
        const projeto = projetos.find(p => p.id == projetoId);
        
        if (projeto) {
            /* Estrutura html */
            detalhesProjeto.innerHTML = `

                <h1>${projeto.titulo}</h1>
                <p>${projeto.descricao}</p>

                <h2>Tecnologias</h2>
                <ul>
                    ${projeto.tecnologias.map(tech => `<li>${tech}</li>`).join('')}
                </ul>

                <div class="banner-projeto">
                    <img src="${projeto.imagem}" alt="${projeto.titulo}">
                </div>

                <h3>Detalhes do projeto</h3>
                <div class="detalhes">
                    <p><strong>Objetivo:</strong> ${projeto.objetivo}</p>

                    <p><strong>Funcionalidades:</strong>
                        <ul>
                            ${projeto.funcionalidades.map(func => `<li>${func}</li>`).join('')}
                        </ul>
                    </p>

                    <p><strong>Tecnologias utilizadas:</strong>
                        <ul>
                            ${projeto.tec_utilizadas.map(tec => `<li>${tec}</li>`).join('')} 
                        </ul>
                    </p>

                    <p><strong>Desafios e soluções:</strong>
                        <ul>
                            ${projeto.desafios.map(des => `<li>${des}</li>`).join('')}
                        </ul>
                    </p>
                </div>

                <h3>Futuras Atualizações</h3>
                <ul>
                    ${projeto.proximos_passos.map(pass => `<li>${pass}</li>`).join('')}
                </ul>

                <h3>Links Úteis</h3>
                <div class="links-projeto">
                    <a href="${projeto.link_repo}" target="_blank">
                        <button>Repositório no GitHub</button>
                    </a>
                    <a href="${projeto.link_page}" target="_blank">
                        <button>Deploy</button>
                    </a>
                    <a href="index.html">
                        <button id="btn-port">Voltar ao portfólio</button>
                    </a>
                </div>
            `;
        } else {
            detalhesProjeto.innerHTML = '<p>Projeto não encontrado</p>';
        }
    } else {
        detalhesProjeto.innerHTML = '<p>Nenhum projeto selecionado</p>';
    }
});