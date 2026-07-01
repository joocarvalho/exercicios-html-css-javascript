const display= document.getElementById('numero-principal');
const btnMais = document.getElementById('btn-mais');
const btnMenos = document.getElementById('btn-menos');

let contador = 0;

btnMais.addEventListener('click', () => {
    if(contador < 10){
        contador = contador + 1;
        display.textContent = contador;
    }
});

btnMenos.addEventListener('click', () => {
    if(contador > 0){
        contador = contador - 1;
        display.textContent = contador;
    }
});