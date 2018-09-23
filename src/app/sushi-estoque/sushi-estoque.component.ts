import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  onShowSearchResult(searchResponse: any){
      this.ingredientes = searchResponse;
      console.log('onShowSearchResultParameter: ', searchResponse);
      console.log('onShowSearchResult: ', this.ingredientes);
  }

  onUpdateIngredientList() {
    this.getIngredients();
  }
  
}
