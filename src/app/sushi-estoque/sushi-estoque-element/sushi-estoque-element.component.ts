import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingrediente } from '../../models/ingredientes.model';
import { ElementHandleEventFn } from '@angular/core/src/view';
import { SushiEstoqueService } from '../sushi-estoque.service';

@Component({
  selector: 'app-sushi-estoque-element',
  templateUrl: './sushi-estoque-element.component.html',
  styleUrls: ['./sushi-estoque-element.component.scss']
})
export class SushiEstoqueElementComponent implements OnInit {
  
  @Input() ingrediente: Ingrediente;
  @Output() ingredienteSelect: EventEmitter<Ingrediente> = new EventEmitter<Ingrediente>();

  constructor() { }
  
  ngOnInit() { }

  onSelectIngrediente(ingrediente: Ingrediente){
    console.log("onSelectIngrediente", ingrediente);
    this.ingredienteSelect.emit(ingrediente);
  }
  

}
