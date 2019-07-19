import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styles: []
})
export class NoPageFoundComponent implements OnInit {

  frases = ['Ooops! No existe lo que andas buscando.','Pagina no encontada','¿Cómo llegastes acá?', 'Este es un Easter Egg', 'Tú estas aquí, nosotros no.', 'Parece que este no es un buen lugar.', 'Algo se perdió en el camino que no lo puedes encontrar']
  max = this.frases.length;

  lema = '';
  constructor() { }

  ngOnInit() {
    this.generarlema();
  }

  generarlema(){
    let num = this.numAleatorio(0,this.max);
    this.lema = this.frases[num];
    console.log(this.lema);
    return this.lema;
  }

  numAleatorio(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
  }
}
