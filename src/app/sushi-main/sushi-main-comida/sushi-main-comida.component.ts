import { Component, OnInit } from '@angular/core';
import { SushiMainService } from '../sushi-main.service';
import { Comida } from './../../models/comida.model';
import { SushiProdutoService } from '../../sushi-produto/sushi-produto.service';

@Component({
  selector: 'app-sushi-main-comida',
  templateUrl: './sushi-main-comida.component.html',
  styleUrls: ['./sushi-main-comida.component.scss']
})
export class SushiMainComidaComponent implements OnInit {
  
  comidaItens: Comida[];

  constructor(private sushiMainService: SushiMainService,
              private sushiProdutoService: SushiProdutoService) { }

  ngOnInit() {
    this.sushiProdutoService.getProdutosByType('comida')
    .then((response: Comida[]) => this.comidaItens = response)
    .catch(err => console.log(err));
  }

  onLog(){
    console.log();
  }

}
