const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    min: '',
    max: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();
});

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    // console.log(datosBusqueda);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.min = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.max = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    // console.log(datosBusqueda);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});

function mostrarAutos(autos) {

    limpiarHtml();

    autos.forEach(auto => {

        //destructuracion de objetos
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}`;
        resultado.appendChild(autoHTML);
    });
}

function llenarSelect(){
    
    for(let i = max; i > min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filtrarAuto() {
    
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMin ).filter( filtrarMax ).filter( filtrarPuertas).filter( filtrarTransmision).filter( filtrarColor);
    
    if (resultado.length > 0) {
        console.log(resultado);
        mostrarAutos(resultado);
    } else {
        sinResultados();
    }
}

function sinResultados(){

    limpiarHtml();
    const autoHTML = document.createElement('p');
    autoHTML.classList.add('alerta', 'error');
    autoHTML.textContent = 'No hay autos que coincidan con esos criterios';
    resultado.appendChild(autoHTML);
}

function filtrarMarca(auto){
    // si selecciono una marca, retorna los autos que tengan esa marca
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } 
    // si no selecciono una marca, retorna todos los autos
    return auto;
        
}

function filtrarYear(auto){
    // si selecciono un año, retorna los autos que tengan esa año
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } 
    // si no selecciono un año, retorna todos los autos
    return auto;
}

function limpiarHtml(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarMin(auto){
    // si selecciono un precio minimo, retorna los autos que tengan ese precio minimo
    if (datosBusqueda.min) {
        return auto.precio >= datosBusqueda.min;
    } 
    // si no selecciono un precio minimo, retorna todos los autos
    return auto;
}

function filtrarMax(auto){
    // si selecciono un precio max, retorna los autos que tengan ese precio max
    if (datosBusqueda.max) {
        return auto.precio <= datosBusqueda.max;
    } 
    // si no selecciono un precio max, retorna todos los autos
    return auto;
}

function filtrarPuertas(auto){
       // si selecciono una cantidad de puertas, retorna los autos que tengan esa cantidad de puertas
       if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } 
    // si no selecciono una cantidad de puertas, retorna todos los autos
    return auto;
}

function filtrarTransmision(auto){
    // si selecciono una transmision, retorna los autos que tengan esa transmision
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } 
    // si no selecciono una transmision, retorna todos los autos
    return auto;
}

function filtrarColor(auto){
    // si selecciono un color, retorna los autos que tengan ese color
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } 
    // si no selecciono un color, retorna todos los autos
    return auto;
}