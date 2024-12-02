document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); /* Previne o recarregamento da página */

    /* Seleciona a nota e o feedback */
    const rating = document.querySelector('input[name="nota"]:checked');
    const feedback = document.getElementById("feedback").value.trim();
    const ratingError = document.getElementById("ratingError");

    /* Verifica se a nota foi selecionada */
    if (!rating) {
      ratingError.classList.add("active"); /* Exibe a mensagem de erro */
      return;
    } else {
      ratingError.classList.remove("active"); /* Esconde a mensagem de erro */
    }

    /* Verifica se o feedback está preenchido */
    if (!feedback) {
      const feedbackError = document.getElementById("feedbackError");
      if (!feedbackError) {
        const div = document.createElement("div");
        div.id = "feedbackError";
        div.style.color = "red";
        div.textContent = "Por favor, preencha o feedback!";
        document
          .getElementById("feedback")
          .insertAdjacentElement("afterend", div);
      }
      return; /* Impede o envio se o feedback não estiver preenchido */
    } else {
      const feedbackError = document.getElementById("feedbackError");
      if (feedbackError) {
        feedbackError.remove(); /* Remove o erro se tudo estiver certo */
      }
    }

    alert(`Obrigado por avaliar nosso site com ${rating.value} estrela(s)!`);
    document
      .getElementById("feedbackForm")
      .reset(); /* Recarrega o formulário */
  });

/* Traz o agendamento do usuário para a página de feedback */
const dia = localStorage.getItem("dia");
const hora = localStorage.getItem("hora");

if (dia && hora) {
  document.getElementById(
    "mensagem"
  ).textContent = `Seu agendamento foi realizado com sucesso para o dia ${dia} às ${hora}.`;
}
