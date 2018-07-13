import { Component, OnInit } from '@angular/core';
import { SushiMainService } from '../sushi-main.service';
import { Comida } from './../../models/comida.model';

@Component({
  selector: 'app-sushi-main-comida',
  templateUrl: './sushi-main-comida.component.html',
  styleUrls: ['./sushi-main-comida.component.scss']
})
export class SushiMainComidaComponent implements OnInit {
  
  comidaItens: Comida[];

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {
    this.comidaItens = this.sushiMainService.getComidas();
  }

  onLog(){
    console.log();
  }

}
