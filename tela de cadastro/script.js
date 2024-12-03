function validateForm() {
    // Impede o envio padrão do formulário
    event.preventDefault();
    
    const nome = document.getElementById('firstname').value;
    const telefone = document.getElementById('number').value;
    const endereco = document.getElementById('Endereço').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('Cpf').value;
    const sobrenome = document.getElementById('lestname').value;
    const dataNascimento = document.getElementById('date').value;
    
    if (!nome) {
      alert('Por favor, insira seu nome.');
      return;
    }

    const telefonePattern = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!telefone || !telefonePattern.test(telefone)) {
      alert('Por favor, insira um telefone válido no formato (xx) xxxx-xxxx.');
      return;
    }

    if (!endereco) {
      alert('Por favor, insira seu endereço.');
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return;
    }

    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf || !cpfPattern.test(cpf)) {
      alert('Por favor, insira um CPF válido no formato xxx.xxx.xxx-xx.');
      return;
    }

    if (!sobrenome) {
      alert('Por favor, insira seu sobrenome.');
      return;
    }

    if (!dataNascimento) {
      alert('Por favor, insira sua data de nascimento.');
      return;
    }

    window.location.href = '/tela de agendamento/index.html';
  }