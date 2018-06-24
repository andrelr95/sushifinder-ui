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

  ingredientes: Ingrediente[] = INGREDIENTES;

  constructor() { }

  ngOnInit() {
  }

  onLog(){
    console.log(this.ingredientes);
  }

  onAdd(form: NgForm){
    let ingrediente = {
      descricao: form.value.ingredienteDescricao,
      qtdeEstoque: form.value.ingredienteQuantidade,
      ativo: true,
      tipo: 'bebida'
    }

    this.ingredientes.push(ingrediente);
    console.log(form.value.ingredienteDescricao);
  }

}
