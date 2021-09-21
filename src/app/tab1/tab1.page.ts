import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(){
    console.log('Hola Mundo');
    let numero = 20;
    //Debugger: Herramienta para escanear el codigo, se utiliza en el navegador
    debugger;
    
    numero = 15;

    numero = numero + 30
   
    numero = 0;

    console.log(numero)
  }
}
 