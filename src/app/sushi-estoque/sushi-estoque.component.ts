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

  onUpdateIngredientList() {
    this.getIngredients();
  }
  
}
