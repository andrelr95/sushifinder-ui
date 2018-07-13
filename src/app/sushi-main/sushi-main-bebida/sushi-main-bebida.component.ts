import { Component, OnInit } from '@angular/core';
import { Bebida } from '../../models/bebida.model';
import { BEBIDAS } from '../../mocks/produtos-mock';

@Component({
  selector: 'app-sushi-main-bebida',
  templateUrl: './sushi-main-bebida.component.html',
  styleUrls: ['./sushi-main-bebida.component.scss']
})
export class SushiMainBebidaComponent implements OnInit {

  bebidaItens: Bebida[] = BEBIDAS;

  constructor() { }

  ngOnInit() {
    console.log(this.bebidaItens);
  }

}
