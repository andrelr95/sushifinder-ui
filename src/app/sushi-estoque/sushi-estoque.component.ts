import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../models/ingredientes.model';
import { INGREDIENTES } from '../mocks/ingredientes-mock';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-estoque',
  templateUrl: './sushi-estoque.component.html',
  styleUrls: ['./sushi-estoque.component.scss']
})
export class SushiEstoqueComponent implements OnInit {

  ingredienteElements: Ingrediente[] = INGREDIENTES;

  ingredienteDescricao = '';
  ingredienteQuantidade = 0;

  constructor() { }

  ngOnInit() {
  }

  onLog(index){
    console.log(index);
  }

  onEditIngrediente(ingrediente: Ingrediente, i:any){
    console.log(ingrediente, i);
    this.ingredienteDescricao = ingrediente.descricao;
    this.ingredienteQuantidade = ingrediente.qtdeEstoque;
  }

  onAdd(){
    this.ingredienteElements.push(new Ingrediente(this.ingredienteDescricao, 'ingrediente', this.ingredienteQuantidade, true));
    this.ingredienteDescricao = '';
    this.ingredienteQuantidade = 0;
  }
}
