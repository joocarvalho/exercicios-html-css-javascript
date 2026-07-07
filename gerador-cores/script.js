const telaPrincipal = document.getElementById("tela-principal");
const btnCor = document.getElementById("btn-cor");
const txtCor = document.getElementById("txt-cor");

const letrasENums = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function corAleatoria(){
    let corHexadecimal = "#";
    for(i = 1; i <= 6; i++){
        let indice = Math.floor(Math.random() * letrasENums.length);
        corHexadecimal += letrasENums[indice];
    }
    return corHexadecimal
}

btnCor.addEventListener('click', () =>{
    const novaCor = corAleatoria();

    telaPrincipal.style.backgroundColor = novaCor;

    txtCor.innerText = novaCor;
})