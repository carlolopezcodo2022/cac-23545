/*
    OPERADOR ARITMETICOS

    + suma
    - resta
    / division
    * multiplicacion
*/
function sumar() {
    let valor1 = document.getElementById('valor1').value;//por ser input
    let valor2 = document.getElementById('valor2').value;
    let resultado = Number(valor1) + Number(valor2);
    //alert(resultado);
    document.getElementById('res').innerHTML = resultado;//por que es div
}

function restar() {
    let valor1 = document.getElementById('valor1').value;//por ser input
    let valor2 = document.getElementById('valor2').value;
    let resultado = Number(valor1) - Number(valor2);
    //alert(resultado);
    document.getElementById('res').innerHTML = resultado;//por que es div
}