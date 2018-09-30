import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sushi-produto-edit',
  templateUrl: './sushi-produto-edit.component.html',
  styleUrls: ['./sushi-produto-edit.component.scss']
})
export class SushiProdutoEditComponent implements OnInit {

  constructor() { }

  tipoProdutos: String[] = ['comida', 'bebida'];
  
  ngOnInit() {
  }

}
