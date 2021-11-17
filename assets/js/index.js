//importar modulos de animales

import Aguila from './aguila.js'
import Leon from './leon.js'
import Lobo from './lobo.js'
import Oso from './oso.js'
import Serpiente from './serpiente.js'

//recoger el valor del animal seleccionado para asignar su imagen correspondiente (antes del evento click del boton)

const fotoAnimal=document.querySelector('#animal')
function imagenAnimal(e) {
    let selectElement=e.target;
    let value=selectElement.value
    let img=document.getElementById('preview')

    if(value=='Aguila'){
        img.innerHTML=`<img src='assets/imgs/Aguila.png' alt='Aguila' class='mx-auto d-block' height='200'>`
    }else if(value=='Leon'){
        img.innerHTML=`<img src='assets/imgs/Leon.png' alt='Leon' class='mx-auto d-block' height='200'>`
    }else if(value=='Lobo'){
        img.innerHTML=`<img src='assets/imgs/Lobo.png' alt='Lobo' class='mx-auto d-block' height='200'>`
    }else if(value=='Serpiente'){
        img.innerHTML=`<img src='assets/imgs/Serpiente.png' alt='Serpiente' class='mx-auto d-block' height='200' width='300'>`
    }
    else if(value=='Oso'){
        img.innerHTML=`<img src='assets/imgs/Oso.png' alt='Oso' class='mx-auto d-block' height='200'>`
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

//Instanciar de acuerdo al animal escogido.

if (animal=='Aguila'){
    let aguila=new Aguila(animal,edad, img, comentarios, sonido)
    tabla(`<img src='assets/imgs/Aguila.png' alt='Aguila' class='mx-auto d-block' height='200'></img>`)
}else if(animal=='Leon'){
    let leon= new Leon(animal, edad, img, comentarios, sonido)
    tabla(`<img src='assets/imgs/Leon.png' alt='Leon' class='mx-auto d-block' height='200'>`)
}else if(animal=='Lobo'){
    let lobo= new Lobo(animal, edad, img, comentarios, sonido)
    tabla(`<img src='assets/imgs/Lobo.png' alt='Lobo' class='mx-auto d-block' height='200'>`)
}else if(animal=='Oso'){
    let oso=new Oso(animal,edad, img, comentarios, sonido)
    tabla(`<img src='assets/imgs/Oso.png' alt='Oso' class='mx-auto d-block' height='200'>`)
}else if(animal=='Serpiente'){
    let serpiente= new Serpiente(animal, edad, img, comentarios, sonido)
    tabla(`<img src='assets/imgs/Serpiente.png' alt='Serpiente' class='mx-auto d-block' height='200' width='300'>`)
}
}
registrar.addEventListener('click', informacion)

//tarjetas que se agregan y sonido
function tabla(imagenAnimalTabla){
    
    let btn=document.createElement('button')
    let tabla=`<tr><td>${imagenAnimalTabla}<td></tr><tr> </tr>`
    btn.innerHTML=tabla
    document.getElementById('Animales').appendChild(btn)   
}

function sonido(){
    let boton1=`<img src='assets/imgs/audio.svg' height='30'<tr></tr>`
    let btn1=document.createElement('button')
    btn1.innerHTML=boton1
}




