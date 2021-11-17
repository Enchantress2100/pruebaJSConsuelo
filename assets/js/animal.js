//clase padre que heredará a las clases hijas sus propiedades y métodos.Será llamada desde las clases hijas.

export default class animal{
    constructor(nombre,edad, img, comentarios, sonido){
        this.nombre=nombre
        this.edad=edad
        this.img=img
        this.comentarios=comentarios
        this.sonido=sonido
    }
    get Nombre(){
        this.nombre=nombre
    }
    get Edad(){
        this.edad=edad
    }
    get Img(){
        this.img=img
    }
    set Comentarios(comentarios){
        this.comentarios=comentarios
    }
    get Sonido(){
        this.sonido=this.sonido
    }

}
