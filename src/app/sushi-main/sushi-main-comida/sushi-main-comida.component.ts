import { Component, OnInit } from '@angular/core';

import { Comida } from '../../models/comida.model';
import { Ingrediente } from '../../models/ingredientes.model';
import { COMIDAS } from '../../mocks/produtos-mock';
import { INGREDIENTES_COMIDA } from '../../mocks/ingredientes-mock';

@Component({
  selector: 'app-sushi-main-comida',
  templateUrl: './sushi-main-comida.component.html',
  styleUrls: ['./sushi-main-comida.component.scss']
})
export class SushiMainComidaComponent implements OnInit {

  ingredientes: Ingrediente[] = INGREDIENTES_COMIDA

  comidaItems: Comida[] = COMIDAS;
  
  constructor() { }

  ngOnInit() {
    console.log(this.comidaItems);
  }

  onLog(){
    console.log(this.comidaItems);
  }

}
