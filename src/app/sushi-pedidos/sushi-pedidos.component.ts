import { Component, OnInit } from '@angular/core';
import { SushiMainService } from '../sushi-main/sushi-main.service';
import { SushiPedidoService } from './sushi-pedido.service';
import { ItemSacola } from '../models/item-sacola.model';
import { AuthService } from '../auth/auth.service';
import { PrePedido } from '../models/prePedido.model';

@Component({
  selector: 'app-sushi-pedidos',
  templateUrl: './sushi-pedidos.component.html',
  styleUrls: ['./sushi-pedidos.component.scss']
})
export class SushiPedidosComponent implements OnInit {

  pedidoItens: PrePedido;
  usuario: any;
  enderecos: any;

  constructor(
    private sushiPedidoService: SushiPedidoService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.pedidoItens = this.sushiPedidoService.getPreOrder();
    this.authService.getFullUser(this.authService.getUser())
      .then((response) => {
        this.enderecos = response['pessoa']['enderecos'];
        console.log("CLIENTE: ", this.enderecos);
      })
      .catch((err) => console.log(err));
    console.log("PEDIDO / ngOnInit /TELA PEDIDOS: ", this.pedidoItens);
    
  }

  onLog(){
    let carrinho = JSON.parse(JSON.stringify(this.pedidoItens));
    console.log(carrinho)
    // carrinho['produtos'] = JSON.parse(JSON.stringify(this.pedidoItens));

    let comidas = carrinho.produtos.filter((item) => item.item.tipo === "comida")
    .map((comida) =>  new Object({ item: comida.item['_id'], quantidade: comida.quantidade }));

    let bebidas = carrinho.produtos.filter((item) => item.item.tipo === "bebida")
    .map((bebida) =>  new Object({ item: bebida.item['_id'], quantidade: bebida.quantidade }));

    let precoTotal = carrinho.precoTotal;
    carrinho['precoTotal'] = precoTotal;

    // let prePedido = new PrePedido(carrinho['produtos'], carrinho['precoTotal']);

    // let cliente = this.authService.getUser();

    let pedido = new Object({
      comidas: comidas,
      bebidas: bebidas,
      precoTotal: precoTotal,
      cliente: this.authService.getUser()
    });

    // console.log("PREPEDIDO: ", carrinho);
    // console.log("COMIDAS ID: ", comidas);
    // console.log("BEBIDAS ID: ", bebidas);
    // console.log("CLIENTE: ", cliente);
    // console.log("PRECO TOTAL: ", precoTotal);
    // carrinho['cliente'] = cliente;
    console.log("OBJETO PEDIDO BACKEND: ", pedido);
    // this.sushiPedidoService.setPreOrder(prePedido);
  }

}
