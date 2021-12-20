import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'LuIs qUiroZ';
  
  fecha:Date = new Date(); // Fecha del día de hoy
}
