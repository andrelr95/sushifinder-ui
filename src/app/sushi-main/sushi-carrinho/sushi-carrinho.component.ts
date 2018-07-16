import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { SushiMainService } from '../sushi-main.service';

@Component({
  selector: 'app-sushi-carrinho',
  templateUrl: './sushi-carrinho.component.html',
  styleUrls: ['./sushi-carrinho.component.scss']
})
export class SushiCarrinhoComponent implements OnInit {

  selectedProduto: Produto;

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {
    this.sushiMainService.produtoSelected
      .subscribe(
        (produto: Produto) => {
          this.selectedProduto = produto;
          console.log("PRODUTO SUBSCRIBED", produto);
        }
      )
  }


}
