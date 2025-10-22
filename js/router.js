import { fetchPageContent, renderList, ongTemplate } from './templates.js';

const mockData = {
    ongs: [
        { id: 1, nome: 'ONG Instituto Saber', area: 'Educação', tagClass: 'educacao', localizacao: 'São Paulo - SP', descricao: 'Combate a evasão escolar...', img: 'Crianças lendo livros em uma biblioteca.jpg' },
        { id: 2, nome: 'ONG Amigo dos Animais', area: 'Proteção Animal', tagClass: 'animal', localizacao: 'Rio de Janeiro - RJ', descricao: 'Resgatamos, reabilitamos...', img: 'Um cachorro e um gato juntos em uma área de recreação de animais.jpg' },
        { id: 3, nome: 'Associação Saúde e Vida', area: 'Saúde Comunitária', tagClass: 'saude', localizacao: 'Belo Horizonte - MG', descricao: 'Oferecemos atendimento médico...', img: 'Profissional de saúde examinando um paciente idoso em um ambiente acolhedor..jpg' },
    ]
};

const mainContent = document.querySelector('main');


async function loadContent(path) {
   
    let pageName = path === '/' ? 'index.html' : path.substring(1) + '.html';
    const fullHtml = await fetchPageContent(pageName);
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');
    const newMain = doc.querySelector('main');
    
    if (newMain) {
        mainContent.innerHTML = newMain.innerHTML;
        document.title = doc.title; 

        if (path === '/ongs') {
            const container = document.querySelector('.gallery-container');
            if (container) {
                container.innerHTML = ''; 
                const ongListHtml = renderList(mockData.ongs, ongTemplate);
                container.innerHTML = ongListHtml; 
            }
        }
    }
}


export function navigate(path) {
    window.history.pushState({}, '', path);
    loadContent(path);
}

export function initRouter() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('nav ul li a') || e.target.matches('a.logo-link')) {
             const href = e.target.getAttribute('href');
             if (href && !href.startsWith('#') && !href.startsWith('http')) {
                e.preventDefault();
                const path = href === 'index.html' ? '/' : '/' + href.replace('.html', '');
                navigate(path);
             }
        }
    });

    window.addEventListener('popstate', () => {
        loadContent(window.location.pathname);
    });

    loadContent(window.location.pathname);
}