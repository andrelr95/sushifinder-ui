import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { SushiPedidoService } from 'src/app/sushi-pedidos/sushi-pedido.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sushi-pedidos-historico',
  templateUrl: './sushi-pedidos-historico.component.html',
  styleUrls: ['./sushi-pedidos-historico.component.scss']
})
export class SushiPedidosHistoricoComponent implements OnInit {


  historicoPedidos: Pedido[];

  constructor(private sushiPedidoService: SushiPedidoService) { }

  ngOnInit() {
    this.sushiPedidoService.getPedidosUser()
      .then((response: Pedido[]) => {
        let historico = response.filter((pedido: Pedido) => {
          return pedido['ativo'] === false;
        })

        this.historicoPedidos = this.sortDatesArray(historico).reverse();
      })
      .catch((err) => console.log(err));

  }

  sortDatesArray(array: Pedido[]): Array<Pedido> {
    return array.sort((a: any, b: any) => {
      return a.dataPedido + b.dataPedido;
    })
  }

}
