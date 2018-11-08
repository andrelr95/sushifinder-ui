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

  onDeleteCliente(){
    //TODO DELETE LOGIC SERVICE
  }

}
