import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { SushiPedidoService } from 'src/app/sushi-pedidos/sushi-pedido.service';

@Component({
  selector: 'app-sushi-pedidos-ativo',
  templateUrl: './sushi-pedidos-ativo.component.html',
  styleUrls: ['./sushi-pedidos-ativo.component.scss']
})
export class SushiPedidosAtivoComponent implements OnInit {

  pedidosAtivos: Pedido[];

  constructor(private sushiPedidoService: SushiPedidoService) { }

  ngOnInit() {
    this.sushiPedidoService.getPedidosUser()
      .then((response: Pedido[]) => {
        this.pedidosAtivos = response.filter((pedido: Pedido) => {
          return pedido['ativo'] === true;
        })
      })
      .catch((err) => console.log(err));

  }
}
