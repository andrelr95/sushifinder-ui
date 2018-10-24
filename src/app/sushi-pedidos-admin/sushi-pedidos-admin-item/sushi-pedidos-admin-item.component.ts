import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { SushiPedidoService } from 'src/app/sushi-pedidos/sushi-pedido.service';

@Component({
  selector: 'app-sushi-pedidos-admin-item',
  templateUrl: './sushi-pedidos-admin-item.component.html',
  styleUrls: ['./sushi-pedidos-admin-item.component.scss']
})
export class SushiPedidosAdminItemComponent implements OnInit {

  constructor( private sushiPedidoService: SushiPedidoService) { }

  @Input() pedido: Pedido;
  pedidoStatus: string = "";
  isLoading: boolean = false;

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

  onStatusChange(status: string) {
    console.log(status);
    const id = this.pedido._id;
    this.isLoading = true;
    this.sushiPedidoService.updatePedidoStatus(id, status)
      .then((response) => {
        console.log(response);
        const statusResponse = response['data']['status'];
        this.pedido.status = statusResponse
        this.pedidoStatus = this.panelStatusControl(statusResponse);
        this.isLoading = false;
      })
      .catch((err) => console.log(err));
  }
}
