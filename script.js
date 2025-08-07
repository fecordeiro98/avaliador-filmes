const todos = document.querySelectorAll('input[type="range"]');
todos.forEach(input => {
    input.addEventListener('change', calcular);
});

function calcular() {
    let intro = parseFloat(document.getElementById('intro').value);
    let desen = parseFloat(document.getElementById('desen').value);
    let clima = parseFloat(document.getElementById('clima').value);
    let resol = parseFloat(document.getElementById('resol').value);
    let final = parseFloat(document.getElementById('final').value);

    let media = (intro + desen + clima + resol + final) / 5;
    document.getElementById('total').value = media.toFixed(1);
}

function update(slider, valor) {
    const range = document.getElementById(slider);
    const value = document.getElementById(valor);

    range.addEventListener('input', function() {
        value.textContent = parseFloat(this.value).toFixed(1);
    });
}
update('intro', 'valorIntro');
update('desen', 'valorDesen');
update('clima', 'valorClima');
update('resol', 'valorResol');
update('final', 'valorFinal');

onload(calcular());