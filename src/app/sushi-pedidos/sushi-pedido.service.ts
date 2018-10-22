import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemSacola } from '../models/item-sacola.model';
import { PrePedido } from '../models/prePedido.model';

@Injectable()
export class SushiPedidoService {

  preOrder: PrePedido;

  constructor() { }

  getPreOrder(): PrePedido {
    return this.preOrder;
  }

  setPreOrder(preOrder: PrePedido) {
    this.preOrder = preOrder;
  }

}
