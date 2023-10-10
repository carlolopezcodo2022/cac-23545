/*
    OPERADOR ARITMETICOS

    + suma
    - resta
    / division
    * multiplicacion
*/
function sumar(valor1,valor2) {    
    return Number(valor1) + Number(valor2);
}

function restar(valor1,valor2) {
    return Number(valor1) - Number(valor2);        
}
function calcular(operacion) {
    let valor1 = getValueById('valor1');//1
    let valor2 = getValueById('valor2');//
    let resultado = '';
    if(valor1 !== '' && valor2 !== '') {
        //quiero saber que operacion realizar
        if(operacion === '+') {
            //invoco la funcion sumar
            resultado = sumar(valor1,valor2);
        }else {
            resultado = restar(valor1,valor2);
        }
    }
    actualizarContenido('res',resultado);
}

function getValueById(id) {
    //defino una constante
    return document.getElementById(id).value;
}
function actualizarContenido(id,nuevoContenido) {
    document.getElementById(id).innerHTML = nuevoContenido;
}