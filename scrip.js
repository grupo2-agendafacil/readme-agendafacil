

function alertaAgendamento(){
   
    let hora =document.getElementById("hora")
    let date =document.getElementById("date")
    //verificando campo vazio
    if(hora.value ==''){
    alert("campo vazio")
    }else if(date==''){
 }else{
        exibirTextoNaTela('h3','agendamento feito com sucesso')
       }
    }
    




function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;}