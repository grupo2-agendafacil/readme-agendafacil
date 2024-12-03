function validateForm() {
  // Impede o envio padrão do formulário
  event.preventDefault();

  const nome = document.getElementById("firstname").value;
  const telefone = document.getElementById("number").value;
  const endereco = document.getElementById("Endereço").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("Cpf").value;
  const sobrenome = document.getElementById("lestname").value;
  const dataNascimento = document.getElementById("date").value;

  if (!nome) {
    alert("Por favor, insira seu nome.");
    return;
  }

  if (!endereco) {
    alert("Por favor, insira seu endereço.");
    return;
  }

  if (!email || !email.includes("@")) {
    alert("Por favor, insira um email válido.");
    return;
  }

  if (!sobrenome) {
    alert("Por favor, insira seu sobrenome.");
    return;
  }

  if (!dataNascimento) {
    alert("Por favor, insira sua data de nascimento.");
    return;
  }

  window.location.href = "/tela de agendamento/index.html";
}
