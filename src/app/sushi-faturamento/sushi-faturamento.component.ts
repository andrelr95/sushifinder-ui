import { Component, OnInit } from '@angular/core';
import { SushiFaturamentoService } from './sushi-faturamento.service';
import { MESES } from '../mocks/meses-mock';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-faturamento',
  templateUrl: './sushi-faturamento.component.html',
  styleUrls: ['./sushi-faturamento.component.scss']
})
export class SushiFaturamentoComponent implements OnInit {

  constructor(
    private sushiFaturamentoService: SushiFaturamentoService
  ) { }

  faturamento: any;
  meses: Object[] = MESES;

  ngOnInit() {
    this.sushiFaturamentoService.getFaturamentosById('112018')
      .then((response) => {
        this.faturamento = response;
      })
      .catch((err) => console.log(err));
  }

  onBuscar(form: NgForm){
    console.log(form.value);
  }
}
