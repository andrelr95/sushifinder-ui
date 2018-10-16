import { Component, OnInit } from '@angular/core';
import { SushiMainService } from '../sushi-main/sushi-main.service';

@Component({
  selector: 'app-sushi-pedidos',
  templateUrl: './sushi-pedidos.component.html',
  styleUrls: ['./sushi-pedidos.component.scss']
})
export class SushiPedidosComponent implements OnInit {

  pedido: Object;

  constructor(
    private sushiMainService: SushiMainService
  ) { }

  ngOnInit() {
    // this.sushiMainService.preOrder.subscribe((preOrder) => {
    //   this.pedido = preOrder;
    //   console.log("PEDIDO / TELA PEDIDOS: ", this.pedido);
    // })
  }

}
