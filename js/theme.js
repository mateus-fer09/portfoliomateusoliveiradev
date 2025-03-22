// Função para alternar o tema
function toggleTheme() {
    const body = document.body;

    // Alterna a classe 'dark-theme' no body
    body.classList.toggle('dark-theme');

    // Salva a preferência do tema no localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');

    // Alterna a visibilidade dos botões conforme o tema
    const darkButton = document.getElementById('dark-theme');
    const lightButton = document.getElementById('light-theme');

    if (isDarkTheme) {
        darkButton.style.display = 'none'; // Oculta o botão dark
        lightButton.style.display = 'inline-block'; // Exibe o botão light
    } else {
        darkButton.style.display = 'inline-block'; // Exibe o botão dark
        lightButton.style.display = 'none'; // Oculta o botão light
    }
}

// Função para aplicar o tema salvo ou seguir o tema do sistema
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme'); // Obtém o tema salvo
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; // Verifica o tema do sistema

    const body = document.body;

    // Aplica o tema salvo, se existir, ou segue o tema do sistema
    if (savedTheme === 'dark' || (savedTheme === null && systemTheme === 'dark')) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

    // Configura a visibilidade dos botões conforme o tema aplicado
    const darkButton = document.getElementById('dark-theme');
    const lightButton = document.getElementById('light-theme');

    if (body.classList.contains('dark-theme')) {
        darkButton.style.display = 'none'; // Oculta o botão dark
        lightButton.style.display = 'inline-block'; // Exibe o botão light
    } else {
        darkButton.style.display = 'inline-block'; // Exibe o botão dark
        lightButton.style.display = 'none'; // Oculta o botão light
    }
}

// Adiciona o evento de clique ao botão dark-theme
document.getElementById('dark-theme').addEventListener('click', toggleTheme);

// Adiciona o evento de clique ao botão light-theme
document.getElementById('light-theme').addEventListener('click', toggleTheme);

// Aplica o tema salvo ou o tema do sistema ao carregar a página
applySavedTheme();

// Observa mudanças no tema do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Se não houver tema salvo no localStorage, aplica o tema do sistema
    if (!localStorage.getItem('theme')) {
        applySavedTheme();
    }
});