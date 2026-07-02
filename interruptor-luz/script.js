const interruptor = document.getElementById('interruptor');

interruptor.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        interruptor.innerHTML = 'Modo<br>Light';
    } else {
        interruptor.innerHTML = 'Modo<br>Dark';
    }
});