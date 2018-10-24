import { Component, OnInit } from '@angular/core';
import { SushiPedidoService } from '../sushi-pedidos/sushi-pedido.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-sushi-pedidos-admin',
  templateUrl: './sushi-pedidos-admin.component.html',
  styleUrls: ['./sushi-pedidos-admin.component.scss']
})
export class SushiPedidosAdminComponent implements OnInit {

  constructor( private sushiPedidoService: SushiPedidoService ) { }

  pedidos: Pedido[];
  pedidoStatus: string = "";

  ngOnInit() {
    this.sushiPedidoService.getPedidos()
      .then((response: Pedido[]) => { this.pedidos = response; console.log(this.pedidos); })
      .catch((err) => console.log(err));
    
    }

}
