//importar modulos de animales

import Aguila from './aguila.js'
import Leon from './leon.js'
import Lobo from './lobo.js'
import Oso from './oso.js'
import Serpiente from './serpiente.js'

//funcion asincrona

async function animalAsincronoImagen (nombreAnimal){
    try {
        const solicitud = await fetch('../../animales.json');
        const objAnimales = await solicitud.json();
        let a = objAnimales.animales.filter((e)=> e.name==nombreAnimal )
        let imagenFinal = a[0].imagen
        return imagenFinal   
    } catch (error) {
        console.log(error)
    }
}

//funcion para limpiar formulario
function limpiar(){
    document.getElementById('animal').value="";
    document.getElementById('edad').value="";
    document.getElementById('comentarios').value="";
    document.getElementById('preview').innerHTML="";
}

//validar si todos los campos estan completos (se da la respuesta por consola)
function validar(animal, edad, comentarios){
    let validacion=true;
    
    if (animal ==='Seleccione un animal'){
        console.log('Por favor, seleccionar un animal del listado')
        validacion = false
    }
    if(edad==='Seleccione un rango de años'){
        console.log('Por favor, seleccionar el rango de edad del animal')
        validacion = false
    }
    if(comentarios==""){
        console.log('Por favor, escriba comentarios')
        validacion = false
    }
    return validacion
}

//recoger el valor del animal seleccionado para asignar su imagen correspondiente (antes del evento click del boton)
let aguilaImagen=`<img src='./assets/imgs/${await animalAsincronoImagen('Aguila')}' alt='Aguila' class='mx-auto d-block' height='200'>`
let leonImagen=`<img src='./assets/imgs/${await animalAsincronoImagen('Leon')}' alt='Leon' class='mx-auto d-block' height='200'>`
let loboImagen=`<img src='./assets/imgs/${await animalAsincronoImagen('Lobo')}' alt='Lobo' class='mx-auto d-block' height='200'>`
let serpienteImagen=`<img src='./assets/imgs/${await animalAsincronoImagen('Serpiente')}' alt='Serpiente' class='mx-auto d-block' height='200' width='300'>`
let osoImagen=`<img src='assets/imgs/${await animalAsincronoImagen('Oso')}'alt='Oso' class='mx-auto d-block' height='200'>`

const fotoAnimal=document.querySelector('#animal')
function imagenAnimal(e) {
    let selectElement=e.target;
    let value=selectElement.value
    let img=document.getElementById('preview')

    if(value=='Aguila'){
        img.innerHTML=aguilaImagen
    }else if(value=='Leon'){
        img.innerHTML=leonImagen
    }else if(value=='Lobo'){
        img.innerHTML=loboImagen
    }else if(value=='Serpiente'){
        img.innerHTML=serpienteImagen
    }else if(value=='Oso'){
        img.innerHTML=osoImagen
    }
}
fotoAnimal.addEventListener('change',imagenAnimal)

//comportamiento del boton

let registrar=document.getElementById('btnRegistrar')
let informacion=(event)=>{
    event.preventDefault();

//recoger valores de los inputs de HTML
let animal=document.getElementById('animal').value
let edad=document.getElementById('edad').value 
let img=document.getElementById('preview')
let sonido=document.getElementById('player')
let comentarios=document.getElementById('comentarios').value

//validar informacion
validar(animal, edad, comentarios)

//Instanciar de acuerdo al animal escogido.
if (animal=='Aguila'&& validar(animal, edad, comentarios)){
    let aguila=new Aguila(animal,edad, img, comentarios, sonido)
    tabla(aguilaImagen, aguilaSonido,'audioAguila', aguila.edad, aguila.comentarios)
}else if(animal=='Leon'&& validar(animal, edad, comentarios)){
    let leon= new Leon(animal, edad, img, comentarios, sonido)
    tabla(leonImagen, leonSonido, 'audioLeon', leon.edad, leon.comentarios)
}else if(animal=='Lobo' && validar(animal, edad, comentarios)){
    let lobo= new Lobo(animal, edad, img, comentarios, sonido)
    tabla(loboImagen, loboSonido, 'audioLobo', lobo.edad, lobo.comentarios)
}else if(animal=='Oso'&& validar(animal, edad, comentarios)){
    let oso=new Oso(animal,edad, img, comentarios, sonido)
    tabla(osoImagen, osoSonido, 'audioOso', oso.edad, oso.comentarios)
}else if(animal=='Serpiente'&& validar(animal, edad, comentarios)){
    let serpiente= new Serpiente(animal, edad, img, comentarios, sonido)
    tabla(serpienteImagen, serpienteSonido, 'audioSerpiente', serpiente.edad, serpiente.comentarios)
}
//limpiar formulario
limpiar()
}
registrar.addEventListener('click', informacion)

//ruta del sonido
let aguilaSonido=  `./assets/sounds/Chillido.mp3`
let leonSonido= `./assets/sounds/Rugido.mp3`
let loboSonido= `./assets/sounds/Aullido.mp3`
let osoSonido= `./assets/sounds/Gruñido.mp3`
let serpienteSonido= `./assets/sounds/Siseo.mp3`

//creacion de boton para que al hacer click sobre las tarjetas se reproduzca sonido, y se ejecute un modal.
function tabla(imagenAnimalTabla, nombreAudio, botonSonido, edad, comentarios){
    let btn=document.createElement('button')
    btn.setAttribute('id', botonSonido)
    btn.setAttribute('class', 'btn btn-light')
    btn.setAttribute('data-bs-toggle', "modal")
    btn.setAttribute('data-bs-target', "#staticBackdrop")
    let tabla=`<tr><td>${imagenAnimalTabla}<td></tr><tr></tr><tr><img src='assets/imgs/audio.svg' height='30'></tr>`
    btn.innerHTML=tabla
    document.getElementById('Animales').appendChild(btn)   
    const sound = new Audio() 
    let button = document.getElementById(botonSonido) 
    button.addEventListener('click', playSound) 
    function playSound() { 
    sound.src = nombreAudio
    sound.play() 
    document.getElementById('animalModal').innerHTML=`${imagenAnimalTabla}`
    document.getElementById('edadModal').innerHTML=`${edad}`
    document.getElementById('comentariosModal').innerHTML=`${comentarios}`
}
}