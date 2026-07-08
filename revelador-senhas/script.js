const campoSenha = document.getElementById("campo-senha");
const btnSenha = document.getElementById("btn-ver-senha");

btnSenha.addEventListener('click', () => {
    if(campoSenha.type === "password"){
        campoSenha.type= "text";
    }else {
        campoSenha.type= "password";
    }
});