import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/models/pedido.model';
import { SushiPedidoService } from 'src/app/sushi-pedidos/sushi-pedido.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Endereco } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-sushi-pedidos-admin-item',
  templateUrl: './sushi-pedidos-admin-item.component.html',
  styleUrls: ['./sushi-pedidos-admin-item.component.scss']
})
export class SushiPedidosAdminItemComponent implements OnInit {

  constructor( private sushiPedidoService: SushiPedidoService,
               private authService: AuthService) { }

  @Input() pedido: Pedido;
  pedidoStatus: string = "";
  isLoading: boolean = false;
  clienteNome: string;
  clienteCPF: string;
  endereco: Endereco;

  ngOnInit() {
    if(this.pedidoStatus === "") this.pedidoStatus = "info";
    this.pedidoStatus = this.panelStatusControl(this.pedido.status);

    this.authService.getFullUser(this.pedido.cliente['_id'])
      .then((response: Cliente) => {
        this.clienteNome = response.pessoa.nome + ' ' + response.pessoa.sobrenome;
        this.clienteCPF = response.pessoa.cpf;
        this.endereco = response.pessoa.enderecos[0];
        console.log(response)
      })
      .catch((err) => console.log(err));

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
