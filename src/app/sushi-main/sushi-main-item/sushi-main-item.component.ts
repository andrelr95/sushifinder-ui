import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-sushi-main-item',
  templateUrl: './sushi-main-item.component.html',
  styleUrls: ['./sushi-main-item.component.scss']
})
export class SushiMainItemComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {
  }
  onLog(){
    console.log(this.produto);
  }

}
