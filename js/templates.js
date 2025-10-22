/**
 * 
 * @param {string} pageName 
 * @returns {Promise<string>} 
 */
export async function fetchPageContent(pageName) {
    try {
        const response = await fetch(pageName);
        if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${response.statusText}`);
        }
        return response.text();
    } catch (error) {
        console.error('Falha ao carregar o conteúdo:', error);
        return '<h1>Erro 404: Página não encontrada.</h1>';
    }
}
/**
 * 
 * @param {Array<Object>} items 
 * @param {Function} templateFunction 
 * @returns {string} 
 */
export function renderList(items, templateFunction) {
    return items.map(templateFunction).join('');
}

export function ongTemplate(ong) {
    return `
        <article class="gallery-item card" data-id="${ong.id}">
            <img src="${ong.img}" alt="${ong.nome}">
            <h3>${ong.nome}</h3>
            <p><strong>Área de Atuação:</strong> <span class="tag tag-${ong.tagClass}">${ong.area}</span></p>
            <p><strong>Localização:</strong> ${ong.localizacao}</p>
            <p>${ong.descricao}</p>
            <a href="#/ong/${ong.id}">Ver Perfil da ONG</a>
        </article>
    `;
}