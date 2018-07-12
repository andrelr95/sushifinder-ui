import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingrediente } from '../../models/ingredientes.model';
import { ElementHandleEventFn } from '@angular/core/src/view';

@Component({
  selector: 'app-sushi-estoque-element',
  templateUrl: './sushi-estoque-element.component.html',
  styleUrls: ['./sushi-estoque-element.component.scss']
})
export class SushiEstoqueElementComponent implements OnInit {
  
  @Input() ingredienteElement: Ingrediente;
  @Output() ingredienteSelected = new EventEmitter<Ingrediente>();

  descricao = '';
  quantidadeEstoque = 0;

  constructor() { }

  ngOnInit() {
  }

  onSelectIngredienete(){
    
    console.log(this.ingredienteElement);
    this.ingredienteSelected.emit(this.ingredienteElement);
  }

  onEdit(descricao: string, qtdeEstoque: any){
    console.log(descricao, qtdeEstoque);
  }
}
