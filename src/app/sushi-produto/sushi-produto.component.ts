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

  ngOnInit() {
    this.onGetProducts();
  }

  onRecieveUpdateEvent(){
    this.onGetProducts();
  }

  onShowSearchResult(searchResponse: Produto[]){
    this.produtos = searchResponse;
    console.log('onShowSearchResultParameter: ', searchResponse);
    console.log('onShowSearchResult: ', this.produtos);
}

  onGetProducts(){
    this.sushiProdutoService.getProdutos()
      .then( (response: Produto[]) => {
        this.produtos = response;
        console.log('Recebi a lista de produtos', this.produtos);
      })
      .catch( err => console.log('ERRO ->', err));
  }

}
