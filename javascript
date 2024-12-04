// Função para alternar entre as seções
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Inicializa com a seção Início visível
window.onload = () => {
    showSection('inicio');
};

<a href="javascript:void(0);" onclick="showSection('inicio')">Início</a>

document.addEventListener('DOMContentLoaded', function() {
    // Obtém a URL atual
    var currentPath = window.location.pathname;

    // Remove a classe 'active' de todos os links
    var links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link correspondente à página atual
    if (currentPath.includes('index.html')) {
        document.getElementById('link-home').classList.add('active');
    } else if (currentPath.includes('sobre.html')) {
        document.getElementById('link-about').classList.add('active');
    } else if (currentPath.includes('contato.html')) {
        document.getElementById('link-contact').classList.add('active');
    }
});