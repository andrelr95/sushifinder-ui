import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { Ingrediente } from '../../models/ingredientes.model';
import { SushiProdutoService } from '../sushi-produto.service';

@Component({
  selector: 'app-sushi-produto-item',
  templateUrl: './sushi-produto-item.component.html',
  styleUrls: ['./sushi-produto-item.component.scss']
})
export class SushiProdutoItemComponent implements OnInit {

  constructor(private sushiProdutoService: SushiProdutoService) { }

  @Input() produtoItem: Produto;
  @Output() updateProductsList = new EventEmitter<void>();

  isLoading: boolean = false;

  ngOnInit() {
    console.log(this.produtoItem);
  }

  onDeleteItem() {
    this.isLoading = true;
    console.log(this.produtoItem);
    this.sushiProdutoService.deleteProduto(this.produtoItem)
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          this.updateProductsList.emit();
          this.isLoading = false;
        }, 500)
      })
      .catch( err => console.log(err));
  }

}
