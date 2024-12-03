document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para verificar as validações

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o campo de email está preenchido e é um e-mail válido
    if (!email || !email.includes('@')) {
       alert('Por favor, insira um e-mail válido.');
       return;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
       alert('A senha deve ter pelo menos 6 caracteres.');
       return;
    }

    // Se as validações passarem, o formulário é enviado
    window.location.href = '/tela de agendamento/index.html'; // Redireciona
 });