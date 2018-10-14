import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { SushiMainService } from '../sushi-main.service';
import { ItemSacola } from '../../models/item-sacola.model';

@Component({
  selector: 'app-sushi-carrinho',
  templateUrl: './sushi-carrinho.component.html',
  styleUrls: ['./sushi-carrinho.component.scss']
})
export class SushiCarrinhoComponent implements OnInit {

  // selectedProduto: Produto;
  itensCarrinho: ItemSacola[] = [];
  precoTotal: number = 0;

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {

    this.sushiMainService.produtoSelected
      .subscribe((produto: Produto) => {
          // debugger;
          if(this.itensCarrinho.findIndex((itemCarrinho) => itemCarrinho.produto['_id'] === produto['_id']) === -1){
            this.itensCarrinho.push(new ItemSacola(produto, 1, produto.preco));
          } else {
            this.itensCarrinho = this.itensCarrinho.map(itemCarrinho => {              
              if(itemCarrinho.produto['_id'] !== produto['_id']) return itemCarrinho;
          
              return {
                ...itemCarrinho,
                quantidade: itemCarrinho.quantidade += 1,
                precoItem: itemCarrinho.quantidade*itemCarrinho.produto.preco
              }
            })
          }
          
          this.precoTotal = this.itensCarrinho
            .map((itemCarrinho) => itemCarrinho.precoItem)
              .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);

          console.log("ngOnInit - SUBSCRIBE -> ", this.itensCarrinho);
        }
      )
  }

  onRemoveFromCart(item: ItemSacola) {
    console.log(item);

    this.itensCarrinho.forEach((itemCarrinho) => {
      if(itemCarrinho.produto['_id'] === item.produto['_id']){
        if(itemCarrinho.quantidade === 1){
          this.itensCarrinho
            .splice(this.itensCarrinho.findIndex((itemCarrinho) => itemCarrinho.produto['_id'] === item.produto['_id']), 1);
        } else {
          itemCarrinho.quantidade -= 1;
          itemCarrinho.precoItem = itemCarrinho.precoItem - itemCarrinho.produto.preco 
        }
      }
    })
    this.itensCarrinho.length === 0 ? 
      this.precoTotal = 0 : 
      this.precoTotal = this.itensCarrinho
        .map((item) => item.precoItem)
        .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
  }
}
