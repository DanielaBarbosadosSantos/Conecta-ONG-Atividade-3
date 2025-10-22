export const validationMessages = {
    required: (name) => `O campo ${name} é obrigatório.`,
    email: 'Por favor, insira um endereço de e-mail válido.',
    minlength: (name, min) => `${name} deve ter no mínimo ${min} caracteres.`,
    pattern: (name) => `Verifique o formato do campo ${name}.`
};

function displayError(input, message) {
    const errorElement = document.getElementById(`error-${input.id || input.name}`);
    if (errorElement) {
        errorElement.textContent = message;
    }
    input.classList.add('is-invalid');
}

function clearError(input) {
    const errorElement = document.getElementById(`error-${input.id || input.name}`);
    if (errorElement) {
        errorElement.textContent = '';
    }
    input.classList.remove('is-invalid');
}


function validateInput(input) {
    clearError(input);

    if (!input.validity.valid) {
        if (input.validity.valueMissing) {
            const fieldName = input.name || 'campo';
            displayError(input, validationMessages.required(fieldName));
            return false;
        }
        if (input.validity.typeMismatch && input.type === 'email') {
            displayError(input, validationMessages.email);
            return false;
        }
         if (input.validity.tooShort && input.getAttribute('minlength')) {
             const min = input.getAttribute('minlength');
             const fieldName = input.name || 'campo';
             displayError(input, validationMessages.minlength(fieldName, min));
             return false;
        }
        if (input.validity.patternMismatch) {
            const fieldName = input.name || 'campo';
            displayError(input, validationMessages.pattern(fieldName));
            return false;
        }
        displayError(input, 'Dados inválidos.');
        return false;
    }

    if (input.tagName === 'SELECT' && input.value === '') {
         const fieldName = input.name || 'campo';
         displayError(input, validationMessages.required(fieldName));
         return false;
    }

    if (input.id === 'nome' && input.value.trim().length < 3) {
        displayError(input, validationMessages.minlength('Nome', 3));
        return false;
    }

    return true;
}

/**
 
 * @returns {boolean} 
 */
export function validateForm(form) { 
    let isValid = true;
    const inputs = form.querySelectorAll('input:not([type="file"]), textarea, select');

    inputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
    }

    return isValid;
}

export function initValidationListeners() { 
     const forms = document.querySelectorAll('form');
     forms.forEach(form => {
        const inputs = form.querySelectorAll('input:not([type="file"]), textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
        });
     });
}