document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    var v1 = parseFloat(document.getElementById('v1').value);
    var v2 = parseFloat(document.getElementById('v2').value);

    var resultados = `
        Soma: ${soma(v1, v2)}<br>
        Subtração: ${subtrair(v1, v2)}<br>
        Multiplicação: ${multiplicacao(v1, v2)}<br>
        Divisão: ${divisao(v1, v2)}<br>
    `;
    document.getElementById('result').innerHTML = resultados;
});

function soma(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return b !== 0 ? a / b : 'Divisão por zero!';
}
