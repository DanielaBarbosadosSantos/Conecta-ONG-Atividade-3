# 💜 Conecta ONG | Plataforma de Voluntariado e Doações 

Plataforma web construída para conectar ONGs verificadas a voluntários e doadores, simplificando o processo de apoio ao Terceiro Setor. O projeto foca agora na **implementação de JavaScript Avançado** para transformar a interface em uma **Single Page Application (SPA)** dinâmica e interativa.

## ✨ Funcionalidades Principais (JavaScript Avançado)

A aplicação dinâmica implementa as seguintes funcionalidades obrigatórias:

* **SPA Básico:** Navegação fluida entre todas as páginas sem recarregar o navegador, gerenciada pelo módulo `router.js` usando a `history.pushState()`.
* **Validação de Formulário Completa:** Sistema de verificação de consistência de dados em todos os formulários, exibindo **avisos visuais de erro** (Manipulação do DOM) e impedindo o envio de dados incorretos.
* **Sistema de Templates JS:** Utilização de *Template Literals* (`templates.js`) para renderizar listas dinâmicas (ex: ONGs) a partir de dados simulados.
* **Navegação Modular:** Menu principal com Submenu Dropdown e Navegação Mobile (`ui.js`), completamente desacoplados do HTML.

## ⚙️ Conformidade com as Especificações Técnicas (JavaScript e Modularidade)

O projeto atende 100% a todos os requisitos desta etapa, utilizando padrões modernos de arquitetura Front-end:

| Especificação Obrigatória | Módulo de Implementação | Detalhe da Conformidade |
| :--- | :--- | :--- |
| **Código JavaScript Modular** | Todos os `.js` | Uso de **ES Modules** (`import`/`export`) para organização do código por funcionalidade. |
| **Implementar SPA Básico** | `router.js` | Gerenciamento de rotas e injeção de conteúdo na tag `<main>`. |
| **Criar Sistema de Templates** | `templates.js` | Renderização dinâmica de listas e componentes com *Template Literals*. |
| **Manipulação do DOM** | `router.js`, `validator.js`, `ui.js` | Controle do menu, modal e feedback de erro de validação. |
| **Verificação de Dados** | `validator.js` | Regras customizadas e nativas para consistência de dados, com feedback visual. |

---

## 📁 Estrutura de Arquivos JS

O código JavaScript foi refatorado em uma estrutura limpa e modular:

* `main.js`: Ponto de entrada que inicializa todos os módulos.
* `modules/router.js`: Gerenciamento de rotas do SPA.
* `modules/validator.js`: Lógica de validação e feedback de erro.
* `modules/templates.js`: Funções de template para renderização de HTML.
* `modules/ui.js`: Lógica de interação visual (Menu Hamburger e Modal).

---

## 🚀 Como Executar o Projeto

O projeto utiliza o padrão **ES Modules** e a função `fetch()`, o que **requer um servidor local** para funcionar corretamente (não basta abrir o arquivo `index.html` diretamente).

1.  **Clone o repositório:**
    ```bash
    git clone [SEU_REPOSITORIO]
    ```
2.  **Execute com um Servidor Local:**
    * **Recomendado (VS Code):** Use a extensão "Live Server".
    * **Terminal (Python):** Navegue até a pasta raiz e execute:
        ```bash
        python3 -m http.server 8000
        ```
3.  **Acesse o URL:** Navegue para `http://localhost:8000` (ou a porta usada pelo seu servidor) no seu navegador.

---

## 🤝 Contato

Se você tiver dúvidas ou sugestões, por favor, abra uma **Issue** no repositório.
