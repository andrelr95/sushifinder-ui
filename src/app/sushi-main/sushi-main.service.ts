import { Produto } from '../models/produto.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { SushiProdutoService } from '../sushi-produto/sushi-produto.service';
import { Subject } from 'rxjs';

@Injectable()
export class SushiMainService {

  produtoSelected = new EventEmitter<Produto>();
  // preOrder: Subject<Object> = new Subject<Object>();

  constructor() { }

  setCartItens(produto: Produto){
    this.produtoSelected.emit(produto);
  }

}













// bebidaItens: Bebida[];
// comidaItens: Comida[];

// getComidas(): Comida[] {
//   this.sushiProdutoService.getProdutosByType('comida')
//     .then((response: Comida[]) => this.comidaItens = response)
//     .catch(err => console.log(err));

//     return this.comidaItens;
// }

// getBebidas() {
//   this.sushiProdutoService.getProdutosByType('bebida')
//     .then((response: Bebida[]) => this.bebidaItens = response)
//     .catch(err => console.log(err));
// }