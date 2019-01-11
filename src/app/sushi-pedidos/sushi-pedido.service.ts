import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemSacola } from '../models/item-sacola.model';
import { PrePedido } from '../models/prePedido.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SushiPedidoService {

  preOrder: PrePedido;

  constructor(private http: HttpClient,
    private authService: AuthService) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.authService.getToken()
    }),
    params: undefined
  }

  getPreOrder(): PrePedido {
    return this.preOrder;
  }

  setPreOrder(preOrder: PrePedido) {
    this.preOrder = preOrder;
  }

  getPedidos() {
    return this.http.get(`http://localhost:3000/pedidos`, this.httpOptions).toPromise();
  }

  getPedidosUser() {
    return this.http.get(`http://localhost:3000/pedidos`, {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'x-access-token': this.authService.getToken() }),
      params: new HttpParams().set('cliente', this.authService.getUser())
    }).toPromise();
  }

  updatePedidoStatus(id: string, status: string) {
    return this.http.put(`http://localhost:3000/pedidos/${id}`, { status: status }, this.httpOptions).toPromise();
  }

  postPedidos(pedido: any){
    return this.http.post('http://localhost:3000/pedidos', pedido, this.httpOptions).toPromise();
  }

}
