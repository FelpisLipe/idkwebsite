 document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Limpa os valores anteriores
        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('subjectError').innerText = '';
        document.getElementById('messageError').innerText = '';
        document.getElementById('feedback').innerText = '';

        // Pega os valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        if (name === '') {
            document.getElementById('nameError').innerText = 'Por favor, insira seu nome.';
            valid = false;
        }

        // regex do formato do email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            document.getElementById('emailError').innerText = 'Por favor, insira um e-mail válido.';
            valid = false;
        }

        if (subject === '') {
            document.getElementById('subjectError').innerText = 'Por favor, insira um assunto.';
            valid = false;
        }

        if (message.length < 20) {
            document.getElementById('messageError').innerText = 'A mensagem deve ter pelo menos 20 caracteres.';
            valid = false;
        }

        if (valid) {
            document.getElementById('feedback').innerText = 'Formulário enviado com sucesso!';
            document.getElementById('contactForm').reset(); 
        } else {
            document.getElementById('feedback').innerText = 'Por favor, corrija os erros acima.';
        }
    });