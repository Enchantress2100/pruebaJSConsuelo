//importar clase padre para instaurar comportamiento. La funcion de la clase hija corresponde al sonido.

import animal from './animal.js'

export default class Lobo extends animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        
    }
}