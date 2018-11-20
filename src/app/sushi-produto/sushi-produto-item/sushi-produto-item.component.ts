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
  @Output() selectedProduto = new EventEmitter<Produto>();

  isLoading: boolean = false;

  ngOnInit() {
  }

  onUpdateStatus(status: boolean) {
    this.isLoading = true;
    this.sushiProdutoService.updateStatus(this.produtoItem, status)
      .then((response) => {
        setTimeout(() => {
          this.updateProductsList.emit();
          this.isLoading = false;
        }, 500)
      })
      .catch( err => console.log(err));
  }

  onEditProduto(){
    this.selectedProduto.emit(this.produtoItem);
  }

  onDeleteItem() {
    this.isLoading = true;
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
