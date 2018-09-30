import { Component, OnInit } from '@angular/core';
import { SushiEstoqueService } from '../../sushi-estoque/sushi-estoque.service';
import { Ingrediente } from '../../models/ingredientes.model';

@Component({
  selector: 'app-sushi-produto-edit',
  templateUrl: './sushi-produto-edit.component.html',
  styleUrls: ['./sushi-produto-edit.component.scss']
})
export class SushiProdutoEditComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService) { }

  tipoProdutos: String[] = ['comida', 'bebida'];
  ingredientes: Ingrediente[];
  selectedIngrediente: Ingrediente;

  
  ngOnInit() {
    this.sushiEstoqueService.getEstoqueByType('ingrediente')
      .then( (response: Ingrediente[]) => {
        this.ingredientes = response;
      })
      .catch(err => console.log(err));
  }

  onAddIngrediente(ingrediente: Ingrediente) {
    console.log(ingrediente);
  }

}
