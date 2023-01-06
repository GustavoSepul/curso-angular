import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;
  // metodo uno
  // sumar() {
  //   this.numero += 1;
  // }

  // restar() {
  //   this.numero -= 1;
  // }
  acumular( valor: number ) {
      this.numero += valor;
  }
}
