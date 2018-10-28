import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { SushiMainService } from '../sushi-main.service';
import { ItemSacola } from '../../models/item-sacola.model';
import { AuthService } from 'src/app/auth/auth.service';
import { SushiPedidoService } from 'src/app/sushi-pedidos/sushi-pedido.service';
import { PrePedido } from 'src/app/models/prePedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sushi-carrinho',
  templateUrl: './sushi-carrinho.component.html',
  styleUrls: ['./sushi-carrinho.component.scss']
})
export class SushiCarrinhoComponent implements OnInit {

  itensCarrinho: ItemSacola[] = [];
  precoTotal: number = 0;

  constructor(private sushiMainService: SushiMainService,
              private authService: AuthService,
              private sushiPedidoService: SushiPedidoService,
              private router: Router) { }

  ngOnInit() {

    this.sushiMainService.produtoSelected
      .subscribe((produto: Produto) => {
          if(this.itensCarrinho.findIndex((itemCarrinho) => itemCarrinho.item['_id'] === produto['_id']) === -1){
            this.itensCarrinho.push(new ItemSacola(produto, 1, produto.preco));
          } else {
            this.itensCarrinho = this.itensCarrinho.map(itemCarrinho => {              
              if(itemCarrinho.item['_id'] !== produto['_id']) return itemCarrinho;
          
              return {
                ...itemCarrinho,
                quantidade: itemCarrinho.quantidade += 1,
                precoItem: itemCarrinho.quantidade*itemCarrinho.item.preco
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
      if(itemCarrinho.item['_id'] === item.item['_id']){
        if(itemCarrinho.quantidade === 1){
          this.itensCarrinho
            .splice(this.itensCarrinho.findIndex((itemCarrinho) => itemCarrinho.item['_id'] === item.item['_id']), 1);
        } else {
          itemCarrinho.quantidade -= 1;
          itemCarrinho.precoItem = itemCarrinho.precoItem - itemCarrinho.item.preco 
        }
      }
    })
    this.itensCarrinho.length === 0 ? 
      this.precoTotal = 0 : 
      this.precoTotal = this.itensCarrinho
        .map((item) => item.precoItem)
        .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
  }

  onConfirmarPedido() {

    let carrinho = {};
    carrinho['produtos'] = JSON.parse(JSON.stringify(this.itensCarrinho));

    let precoTotal = this.precoTotal;
    carrinho['precoTotal'] = precoTotal;

    let prePedido = new PrePedido(carrinho['produtos'], carrinho['precoTotal']);

    this.sushiPedidoService.setPreOrder(prePedido);
    this.router.navigate(['/confirmar-pedido']);

  }

  onLog(){
    let carrinho = {};
    carrinho['produtos'] = JSON.parse(JSON.stringify(this.itensCarrinho));

    let comidas = carrinho['produtos'].filter((item) => item.produto.tipo === "comida")
    .map((comida) =>  new Object({ item: comida.produto['_id'], quantidade: comida.quantidade }));

    let bebidas = carrinho['produtos'].filter((item) => item.produto.tipo === "bebida")
    .map((bebida) =>  new Object({ item: bebida.produto['_id'], quantidade: bebida.quantidade }));

    let precoTotal = this.precoTotal;
    carrinho['precoTotal'] = precoTotal;

    let prePedido = new PrePedido(carrinho['produtos'], carrinho['precoTotal']);

    // let cliente = this.authService.getUser();

    // let pedido = new Object({
    //   comidas: comidas,
    //   bebidas: bebidas,
    //   precoTotal: precoTotal,
    //   cliente: cliente
    // });

    // console.log("PREPEDIDO: ", carrinho);
    // console.log("COMIDAS ID: ", comidas);
    // console.log("BEBIDAS ID: ", bebidas);
    // console.log("CLIENTE: ", cliente);
    // console.log("PRECO TOTAL: ", precoTotal);
    // carrinho['cliente'] = cliente;
    console.log("OBJETO PEDIDO BACKEND: ", prePedido);
    // this.sushiPedidoService.setPreOrder(prePedido);
  }
}
