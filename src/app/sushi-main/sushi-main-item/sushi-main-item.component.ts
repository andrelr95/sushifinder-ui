import { Component, OnInit, Input } from '@angular/core';
import { Comida } from '../../models/comida.model';

@Component({
  selector: 'app-sushi-main-item',
  templateUrl: './sushi-main-item.component.html',
  styleUrls: ['./sushi-main-item.component.scss']
})
export class SushiMainItemComponent implements OnInit {

  @Input() comida: Comida;

  constructor() { }

  ngOnInit() {
  }
  onLog(){
    console.log(this.comida);
  }

}
