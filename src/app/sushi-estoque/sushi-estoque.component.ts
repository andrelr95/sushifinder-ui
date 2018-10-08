import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Ingrediente } from '../models/ingredientes.model';
import { INGREDIENTES } from '../mocks/ingredientes-mock';
import { SushiEstoqueService } from "../sushi-estoque/sushi-estoque.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-estoque',
  templateUrl: './sushi-estoque.component.html',
  styleUrls: ['./sushi-estoque.component.scss']
})
export class SushiEstoqueComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService) { }

  ingredientes: Ingrediente[];
  ingredienteSelected: Ingrediente;

  ngOnInit() {
    this.getIngredients();
    console.log('NG ON INIT');
  }

  getIngredients() {
    this.sushiEstoqueService.getEstoque()
    .then((response: Ingrediente[]) => {
      this.ingredientes = response;
      console.log('UPDATED INGREDIENT LIST');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  onReceiveIngredienteSelected(ingrediente: Ingrediente){
    console.log('onReceiveIngredienteSelected', ingrediente);
    this.ingredienteSelected = ingrediente;
    console.log('ingredienteSelected', this.ingredienteSelected);
  }

  onShowSearchResult(searchResponse: Ingrediente[]){
      this.ingredientes = searchResponse;
      console.log('onShowSearchResultParameter: ', searchResponse);
      console.log('onShowSearchResult: ', this.ingredientes);
  }

  onUpdateIngredientList() {
    this.getIngredients();
  }
  
}
