import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  // I18nSelectPipe
  nombre: string = 'Luis';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // I18nPluralPipe
  clientes: string[] = ['Gaby', 'Paola', 'Ivonne', 'Carlos', 'Gabriel'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
    
  }

  cambiarCliente(){
    if( this.nombre == 'Luis' && this.genero == 'masculino'){
      this.nombre = 'Gaby';
      this.genero = 'femenino';
    }
    else if( this.nombre == 'Gaby' && this.genero == 'femenino'){
      this.nombre = 'Luis';
      this.genero = 'masculino';
    }
  }
  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue pipe
  persona = {
    nombre: 'Luis Quiroz',
    edad: 22,
    direccion: 'GDL, Jalisco'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    },
  ];

  // Async Pipe
  myObservable = interval(1000); // 0,1,2,3,4,5,6... // 1000 ms
  // se ejecuta hasta que se suscribe

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}


