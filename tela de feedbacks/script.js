document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o recarregamento da página

    // Seleciona a nota das estrelas
    const rating = document.querySelector('input[name="nota"]:checked'); // Retorna o elemento selecionado ou null
    const feedback = document.getElementById("feedback").value.trim(); // Remove espaços extras

    if (!rating) {
      alert("Por favor, selecione uma nota!"); // Exibe mensagem se nenhuma estrela foi selecionada
      return; // Interrompe o envio
    }

    if (!feedback) {
      alert("Por favor, preencha o feedback!"); // Exibe mensagem se o feedback estiver vazio
      return; // Interrompe o envio
    }

    alert(`Obrigado por avaliar nosso site com ${rating.value} estrela(s)!`); // Mensagem de confirmação
    document.getElementById("feedbackForm").reset(); // Reseta o formulário
  });

/* Traz o agendamento do usuário para a página de feedback */
const dia = localStorage.getItem("dia");
const hora = localStorage.getItem("hora");

if (dia && hora) {
  document.getElementById(
    "mensagem"
  ).textContent = `Seu agendamento foi realizado com sucesso para o dia ${dia} às ${hora}.`;
}
