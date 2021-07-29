const fields = document.querySelectorAll('[required]');


function ValidateFied(field) {
    function verifyErros() {
        let foundError = false
        for (let error in field.validity) {

            //se nao for o customError
            // entao verifica se tem error
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        }
        return foundError;
    }

    function CustomMessge(typeError) {
        const message = {
            text: {
                valueMissing: 'Por Favor, Preencha o campo'
            },
            email: {
                valueMissing: 'Email e obrigatorio',
                typeMismatch: 'Por favor, preencha um email valido'
            }
        }
        return message[field.type][typeError];
    }

    function setCustomMessage(messag) {
        const spanError = field.parentNode.querySelector('span.error')
        if (messag) {
            spanError.classList.add('active');
            spanError.innerHTML = messag;
        } else {
            spanError.classList.remove('active');
            spanError.innerHTML = ''
        }
    }

    return function () {
        const error = verifyErros();
        if (error) {
            const messag = CustomMessge(error);
            setCustomMessage(messag)
        } else {
            field.style.borderColor = 'green';
            setCustomMessage()
        };
    }
}


function CustomValidatio(event) {
    const field = event.target;
    const validation = ValidateFied(field);
    validation()
}


fields.forEach(field => {
    field.addEventListener('invalid', event => {
        // eleminar o bubble
        event.preventDefault()
        CustomValidatio(event)
    })
    field.addEventListener('blur', CustomValidatio)
})




document.querySelector('form')
    .addEventListener('submit', event => {
        event.preventDefault();
        console.log('enviar o formulario')
    })