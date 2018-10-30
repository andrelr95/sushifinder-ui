import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';

@Component({
  selector: 'app-sushi-pedidos-cliente-item',
  templateUrl: './sushi-pedidos-cliente-item.component.html',
  styleUrls: ['./sushi-pedidos-cliente-item.component.scss']
})
export class SushiPedidosClienteItemComponent implements OnInit {

  @Input() pedido: Pedido;
  pedidoStatus: string = "";

  constructor() { }

  ngOnInit() {
    if(this.pedidoStatus === "") this.pedidoStatus = "info";
    this.pedidoStatus = this.panelStatusControl(this.pedido.status);
  }
  
  panelStatusControl(status: string): string {
    let newStatus: string;
    switch(status){
      case 'criado':
        newStatus =  "info";
        break;
      case 'preparando':
        newStatus = "warning";
        break;
      case 'cancelado':
        newStatus = "danger";
        break;
      case 'entregando':
        newStatus = "primary";
        break;
      case 'entregue':
        newStatus = "success";
        break;
      default:
        newStatus =  "primary"
    }
    return newStatus;
  }


}
