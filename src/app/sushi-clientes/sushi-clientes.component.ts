import { Component, OnInit } from '@angular/core';
import { SushiClientesService } from './sushi-clientes.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-sushi-clientes',
  templateUrl: './sushi-clientes.component.html',
  styleUrls: ['./sushi-clientes.component.scss']
})
export class SushiClientesComponent implements OnInit {

  constructor( private sushiClienteService: SushiClientesService ) { }

  clientes: Cliente[];
  clientesToShow: Cliente[];
  searchText: string;
  activeMessage: boolean = true;
  resultMessage: string = '';
  statusMessage: string = '';

  ngOnInit() {
    this.sushiClienteService.getClientes()
      .then((response: Cliente[]) => {
        this.clientes = response;
        this.clientesToShow = response;
        console.log(this.clientes);
      })
      .catch(err => console.log(err));
  }

  onBuscaPorCpf(event: KeyboardEvent) {
    this.searchText = (<HTMLInputElement>event.target).value;
    console.log(this.searchText);
    this.clientesToShow = this.clientes.filter( (cliente) => {
      console.log(cliente);
      return cliente['pessoa']['cpf'].startsWith(this.searchText);
    })
  }

  onDeleteCliente(cliente: Cliente){
    this.activeMessage = true;
    const id = cliente['_id'];

    this.sushiClienteService.delete(id)
      .then((response) => {
        setTimeout(() => {
          this.resultMessage = response['message'];
          this.statusMessage = 'success';
        }, 500);
        this.activeMessage = false;
        this.sushiClienteService.getClientes()
          .then((clientes: Cliente[]) => {
            this.clientes = clientes;
            this.clientesToShow = clientes;
          })
          .catch(e => console.log(e));
      })
      .catch(err => console.log(err));
  }

}
