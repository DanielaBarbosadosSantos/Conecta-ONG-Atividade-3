export function initUI() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('header nav ul');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function () {
            navMenu.classList.toggle('menu-open');
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }

    const dropdownLi = navMenu ? navMenu.querySelector('.has-dropdown') : null;
    const dropdownToggle = dropdownLi ? dropdownLi.querySelector('a') : null;

    if (dropdownToggle && window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', function (e) {
            if (e.currentTarget.parentElement.classList.contains('has-dropdown')) {
                e.preventDefault(); 
                dropdownLi.classList.toggle('is-open');
            }
        });
    }

    const modal = document.getElementById('cadastro-sucesso-modal');
    if (modal) {
        const closeModalBtns = modal.querySelectorAll('.close-modal-btn');

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                modal.classList.remove('is-open');
            });
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('is-open');
            }
        });
    }
}