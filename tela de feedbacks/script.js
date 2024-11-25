document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o recarregamento da página

    // Seleciona a nota das estrelas
    const rating = document.querySelector('input[name="nota"]:checked');
    const feedback = document.getElementById("feedback").value.trim();

    if (!rating) {
      alert("Por favor, selecione uma nota!");
      return;
    }

    if (!feedback) {
      alert("Por favor, preencha o feedback!");
      return;
    }

    alert(`Obrigado por avaliar nosso site com ${rating.value} estrela(s)!`);
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
