import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { SushiMainService } from '../sushi-main.service';

@Component({
  selector: 'app-sushi-main-item',
  templateUrl: './sushi-main-item.component.html',
  styleUrls: ['./sushi-main-item.component.scss']
})
export class SushiMainItemComponent implements OnInit {

  @Input() produto: Produto;

  constructor(private sushiMainService: SushiMainService) { }

  ngOnInit() {
  }

  onSelected(){
    this.sushiMainService.produtoSelected.emit(this.produto);
  }

  onLog(){
    console.log(this.produto);
  }

}
