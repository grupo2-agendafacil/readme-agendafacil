

function alertaAgendamento(){
    exibirTextoNaTela("h3","agendamento feito com sucesso!!")


}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;}