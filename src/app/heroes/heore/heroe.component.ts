import { Component } from '@angular/core';




@Component({
  selector: 'app-heore',
  templateUrl: 'heroe.component.html'
})
export class HeroreComponent{

  nombre: string = 'Ironman';
  edad: number = 45

  get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    // return this.nombre + ' - ' + this.edad.toString()
    return `${ this.nombre } - ${ this.edad }`; //es lo mismo que arriba
  }

  cambiarNombre():void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void {
    this.edad = 25;
  }

}
