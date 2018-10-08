import { Comida } from './../models/comida.model';
import { Bebida } from './../models/bebida.model';
import { COMIDAS } from './../mocks/produtos-mock';
import { BEBIDAS } from './../mocks/produtos-mock';
import { Produto } from '../models/produto.model';
import { ItemSacola } from '../models/item-sacola.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SushiProdutoService } from '../sushi-produto/sushi-produto.service';

@Injectable()
export class SushiMainService {
  //   ingredientes: Ingrediente[] = INGREDIENTES_COMIDA
  produtoSelected = new EventEmitter<Produto>();

  constructor(private sushiProdutoService: SushiProdutoService) { }

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

}