import { Component, OnInit } from '@angular/core';
import { Bebida } from '../../models/bebida.model';
import { BEBIDAS } from '../../mocks/bebidas-mock';

@Component({
  selector: 'app-sushi-main-bebida',
  templateUrl: './sushi-main-bebida.component.html',
  styleUrls: ['./sushi-main-bebida.component.scss']
})
export class SushiMainBebidaComponent implements OnInit {

  bebidas: Bebida[] = BEBIDAS;

  constructor() { }

  ngOnInit() {
  }

}
