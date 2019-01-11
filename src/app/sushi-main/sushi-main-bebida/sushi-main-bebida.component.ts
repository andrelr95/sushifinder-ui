import { Component, OnInit } from '@angular/core';
import { Bebida } from './../../models/bebida.model';
import { SushiMainService } from '../sushi-main.service';
import { SushiProdutoService } from '../../sushi-produto/sushi-produto.service';

@Component({
  selector: 'app-sushi-main-bebida',
  templateUrl: './sushi-main-bebida.component.html',
  styleUrls: ['./sushi-main-bebida.component.scss']
})
export class SushiMainBebidaComponent implements OnInit {

  bebidaItens: Bebida[];

  constructor(private sushiProdutoService: SushiProdutoService) { }

  ngOnInit() {
    this.sushiProdutoService.getProdutosByType('bebida')
    .then((response: Bebida[]) => this.bebidaItens = response)
    .catch(err => console.log(err));
  }

}
