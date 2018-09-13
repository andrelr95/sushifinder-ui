import { Component, OnInit } from '@angular/core';

import { Ingrediente } from '../models/ingredientes.model';
// import { INGREDIENTES } from '../mocks/ingredientes-mock';
import { SushiEstoqueService } from "../sushi-estoque/sushi-estoque.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-estoque',
  templateUrl: './sushi-estoque.component.html',
  styleUrls: ['./sushi-estoque.component.scss']
})
export class SushiEstoqueComponent implements OnInit {

  ingredienteElements: Ingrediente[];
  ingredienteIndex: number = 0;
  ingredienteSelected: Ingrediente;
  ingredienteDescricao = '';
  ingredienteQuantidade = 0;

  constructor(private sushiEstoqueService: SushiEstoqueService) { }

  ngOnInit() {
    this.sushiEstoqueService.getEstoque()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onLog(index){
    console.log(index);
  }

  onSelectIngrediente(ingrediente: Ingrediente, i:any){
    console.log(ingrediente, i);
    this.ingredienteIndex = i;
    this.ingredienteSelected = ingrediente

    this.ingredienteDescricao = ingrediente.descricao;
    this.ingredienteQuantidade = ingrediente.qtdeEstoque;
  }

  onEdit(){
  }

  onAdd(){
    this.ingredienteElements.push(new Ingrediente(this.ingredienteDescricao, 'ingrediente', this.ingredienteQuantidade, true));
    this.ingredienteDescricao = '';
    this.ingredienteQuantidade = 0;
  }
}
