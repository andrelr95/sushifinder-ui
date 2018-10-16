import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { SushiMainService } from '../sushi-main.service';
import { ItemSacola } from '../../models/item-sacola.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sushi-carrinho',
  templateUrl: './sushi-carrinho.component.html',
  styleUrls: ['./sushi-carrinho.component.scss']
})
export class SushiCarrinhoComponent implements OnInit {

  itensCarrinho: ItemSacola[] = [];
  precoTotal: number = 0;

  constructor(private sushiMainService: SushiMainService,
              private authService: AuthService) { }

  ngOnInit() {

    this.sushiMainService.produtoSelected
      .subscribe((produto: Produto) => {
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
        }
      )
  }

  onRemoveFromCart(item: ItemSacola) {
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

  onLog(){
    let carrinho = JSON.parse(JSON.stringify(this.itensCarrinho));

    let comidas = carrinho.filter((item) => item.produto.tipo === "comida")
    .map((comida) =>  new Object({ item: comida.produto['_id'], quantidade: comida.quantidade }));

    let bebidas = carrinho.filter((item) => item.produto.tipo === "bebida")
    .map((bebida) =>  new Object({ item: bebida.produto['_id'], quantidade: bebida.quantidade }));

    let precoTotal = this.precoTotal;

    let cliente = this.authService.getUser();

    let pedido = new Object({
      comidas: comidas,
      bebidas: bebidas,
      precoTotal: precoTotal,
      cliente: cliente
    });

    console.log("PREPEDIDO: ", carrinho);
    console.log("COMIDAS ID: ", comidas);
    console.log("BEBIDAS ID: ", bebidas);
    console.log("CLIENTE: ", cliente);
    console.log("PRECO TOTAL: ", precoTotal);
    console.log("OBJETO PEDIDO BACKEND: ", JSON.stringify(pedido));

    // this.sushiMainService.preOrder.next(pedido);
  }
}
