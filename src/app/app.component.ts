import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }



  title = 'pipesApp';

  nombre: string = 'luis quiroz';
  valor: number = 1999;
  obj = [{
    nombre: 'Paola',
    apellido: 'Quiroz'
  },
  {
    nombre: 'Ivonne',
    apellido: 'Quiroz'
  }]

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
