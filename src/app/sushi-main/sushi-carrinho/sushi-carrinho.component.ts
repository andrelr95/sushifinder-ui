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

  selectedProduto: Produto;
  // carrinho: Produto[] = [];
  itensCarrinho: ItemSacola [] = [];
  precoTotal: number = 0;

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {
    this.sushiMainService.produtoSelected
      .subscribe((produto: Produto) => {
          if(this.itensCarrinho.findIndex((item) => item.produto.id === produto.id) === -1){
            this.itensCarrinho.push(new ItemSacola(produto, 1, produto.preco));
          } else {
            this.itensCarrinho = this.itensCarrinho.map(item => {              
              if(item.produto.id !== produto.id) return item;
              
              return {
                ...item,
                quantidade: item.quantidade += 1,
                precoItem: item.quantidade*item.produto.preco
              }
            })
          }
          
          this.precoTotal = this.itensCarrinho.map((item) => item.precoItem).reduce((i,c) => i + c);

          console.log("PRODUTO SUBSCRIBED", this.itensCarrinho);
        }
      )
  }



}
