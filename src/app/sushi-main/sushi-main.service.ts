import { Comida } from './../models/comida.model';
import { Bebida } from './../models/bebida.model';
import { COMIDAS } from './../mocks/produtos-mock';
import { BEBIDAS } from './../mocks/produtos-mock';
import { Produto } from '../models/produto.model';
import { ItemSacola } from '../models/item-sacola.model';
import { EventEmitter } from '@angular/core';


export class SushiMainService {
//   ingredientes: Ingrediente[] = INGREDIENTES_COMIDA
  produtoSelected = new EventEmitter<Produto>();

  private bebidaItens: Bebida[] = BEBIDAS;
  private comidaItems: Comida[] = COMIDAS;


  getComidas(){
    return this.comidaItems.slice();  
  }

  getBebidas(){
     return this.bebidaItens.slice(); 
  }

}