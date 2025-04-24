const projetos = [
    {
        id: 0,
        titulo: "Controlly",
        descricao: "Um sistema de controle de finanças que registra receitas e despesas com persistência no LocalStorage e modo offline.",
        imagem: "https://portfoliodevmateusoliveira.vercel.app/data/banners/controlly.png",
        tecnologias: ["HTML", "CSS", "JavaScript"], // Padronizado
        link_page: "https://controlly-beta.vercel.app/", // Link real
        link_repo: "https://github.com/seuuser/controlly", // Novo campo
        classButton: "controlly-finance",
        objetivo: "Criar um sistema intuitivo para gerenciamento financeiro pessoal, combinando organização estratégica com um visual moderno (inspirado na Netflix).",
        funcionalidades: [
            "<strong>Transações categorizadas:</strong> Registrar entradas (receitas) e saídas (despesas).",
            "<strong>Metas e orçamentos:</strong> Definir limites e objetivos financeiros.",
            "<strong>Sessão estratégica:</strong> Sugestões de distribuição eficiente da receita.",
            "<strong>Persistência de dados:</strong> Salvamento no localStorage.",
            "<strong>Modo Offline:</strong> Service Worker para cache (PWA)."
        ],
        tec_utilizadas: [
            "<strong>Front-end:</strong> HTML5, CSS3 (Flexbox/Grid), JavaScript (DOM, Eventos).",
            "<strong>Armazenamento:</strong> localStorage para dados das transações.",
            "<strong>PWA:</strong> Service Worker para funcionalidade offline."
        ],
        desafios: [
            "<strong>Desafio:</strong> Garantir persistência de dados. <strong>Solução:</strong> Uso do localStorage.",
            "<strong>Desafio:</strong> Permitir uso offline. <strong>Solução:</strong> Implementação de Service Worker."
        ],
        proximos_passos: [ // Novo campo
            "Filtros avançados para transações (data, categoria).",
            "Exportar extrato em PDF e CSV."
        ]
    }
];

export default projetos;