import { Comida } from './../models/comida.model';
import { Bebida } from './../models/bebida.model';
import { COMIDAS } from './../mocks/produtos-mock';
import { BEBIDAS } from './../mocks/produtos-mock';

export class SushiMainService {
//   ingredientes: Ingrediente[] = INGREDIENTES_COMIDA
  private bebidaItens: Bebida[] = BEBIDAS;
  private comidaItems: Comida[] = COMIDAS;

  getComidas(){
    return this.comidaItems.slice();  
  }

  getBebidas(){
     return this.bebidaItens.slice(); 
  }

}