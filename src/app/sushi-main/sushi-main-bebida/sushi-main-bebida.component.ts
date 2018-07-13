import { Component, OnInit } from '@angular/core';
import { Bebida } from './../../models/bebida.model';
import { SushiMainService } from '../sushi-main.service';

@Component({
  selector: 'app-sushi-main-bebida',
  templateUrl: './sushi-main-bebida.component.html',
  styleUrls: ['./sushi-main-bebida.component.scss']
})
export class SushiMainBebidaComponent implements OnInit {

  bebidaItens: Bebida[];

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {
    this.bebidaItens = this.sushiMainService.getBebidas();
  }

}
