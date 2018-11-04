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
  isLoading: boolean;
  error: boolean = false;
  errorMessage: string;

  ngOnInit() {
    this.sushiFaturamentoService.getFaturamentosById('112018')
      .then((response) => {
        this.faturamento = response;
      })
      .catch((err) => console.log(err));
  }

  onBuscar(form: NgForm){
    console.log(form.value);
    const codigo = form.value.mes + form.value.ano;
    this.isLoading = true;
    this.sushiFaturamentoService.getFaturamentosById(codigo)
      .then((response) => {
        this.faturamento = response;
        this.error = false;
        this.isLoading = false;
      })
      .catch((err) => {
        this.error = true;
        this.errorMessage = err.error.message;
        this.isLoading = false;
      })
    
  }
}
