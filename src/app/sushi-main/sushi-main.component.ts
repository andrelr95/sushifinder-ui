import { Component, OnInit } from '@angular/core';
import { SushiProdutoService } from '../sushi-produto/sushi-produto.service';
import { Bebida } from '../models/bebida.model';
import { Comida } from '../models/comida.model';

@Component({
  selector: 'app-sushi-main',
  templateUrl: './sushi-main.component.html',
  styleUrls: ['./sushi-main.component.scss']
})
export class SushiMainComponent implements OnInit {

  constructor(private sushiProdutoService: SushiProdutoService) { }

  bebidaItens: Bebida[];
  comidaItens: Comida[];

  ngOnInit() {
    
  }

}
