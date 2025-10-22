import { initValidationListeners, validateForm } from './modules/validator.js';
import { initRouter } from './modules/router.js';
import { initUI } from './modules/ui.js'; 

document.addEventListener('DOMContentLoaded', () => {

    initUI(); 

    initRouter(); 
 
    initValidationListeners(); 
    const modal = document.getElementById('cadastro-sucesso-modal');
    if (modal) {
        const submitForms = document.querySelectorAll('form');
        
        submitForms.forEach(form => {
            form.addEventListener('submit', function (e) {
                e.preventDefault(); 
                
                if (validateForm(form)) {
                    modal.classList.add('is-open');
                    form.reset();
                } 
            });
        });
    }
});