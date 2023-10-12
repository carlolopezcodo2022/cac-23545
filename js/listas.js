//1) crear un array vacio
const listado = [];

function add() {    
    //dentro de la funcion  capturo el valor de input
    const valorDelInput = getValueById('elemento');
    //crear dinamicamente un <li>
    //acento grave `${variable}` //alt+96
    const id = Math.random();//id aleatorio
    const item = `<li id="${id}">
        <label>${valorDelInput}</label>
        <button onclick="eliminar(${id})">x</button> 
    </li>`;
    //document.getElementById('lista').innerHTML = item;
    //2) agrego al array
    listado.push(item);

    listar(listado);

    //limpiar input
    updateValue('elemento','');

    //dejo el foco en el input
    ponerFoco('elemento');
}
function eliminar(id) {
    alert(`Elminando ${id} :)`);
}
function listar(lista) {
    //3) recorro el array
    let items = ``;
    for(let valor of lista) {
        items += valor;
    }
    //actualizo el html con la lista completa
    document.getElementById('lista').innerHTML = items;
}
function getValueById(id) {
    return document.getElementById(id).value;
}
function updateValue(id,value) {
    return document.getElementById(id).value = value;
}
function ponerFoco(id) {
    document.getElementById(id).focus();
}
//agregar al boton con id btnAdd un evento click
//para que cuando se presione invoque al metodo add()
document.getElementById("btnAdd").addEventListener('click',add);