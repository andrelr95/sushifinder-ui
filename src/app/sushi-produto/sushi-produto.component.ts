import { Component, OnInit } from '@angular/core';
import { SushiProdutoService } from './sushi-produto.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-sushi-produto',
  templateUrl: './sushi-produto.component.html',
  styleUrls: ['./sushi-produto.component.scss']
})
export class SushiProdutoComponent implements OnInit {

  constructor(private sushiProdutoService: SushiProdutoService) { }

  produtos: Produto[];
  selectedProduto: Produto;

  ngOnInit() {
    this.onGetProducts();
  }

  onRecieveUpdateEvent(){
    this.onGetProducts();
  }

  onShowSearchResult(searchResponse: Produto[]){
    this.produtos = searchResponse;
}

onRecieveProdutoEvent(produto: Produto){
  this.selectedProduto = produto;
}

  onGetProducts(){
    this.sushiProdutoService.getProdutos()
      .then( (response: Produto[]) => {
        this.produtos = this.sortArrayByBoolean(response);
      })
      .catch( err => console.log('ERRO ->', err));
  }

  sortArrayByBoolean(arr: any[]): any[] {
    return arr.sort((a, b) => { return (a.ativo === b.ativo)? 0: a.ativo? -1 : 1 });
  }

}
