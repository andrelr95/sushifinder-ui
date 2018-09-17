import { Component, OnInit } from '@angular/core';
import { SushiEstoqueService } from '../sushi-estoque.service';
import { Ingrediente } from '../../models/ingredientes.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-estoque-edit',
  templateUrl: './sushi-estoque-edit.component.html',
  styleUrls: ['./sushi-estoque-edit.component.scss']
})
export class SushiEstoqueEditComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService) { }

  isLoading: boolean = false;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  tiposItem = ['ingrediente', 'bebida'];
  
  ngOnInit() {
  }
  
  isActiveItem(ingredienteQuantidade: number): boolean {
    return ingredienteQuantidade > 0;
  }
  
  onSaveItem(form: NgForm){
    this.isLoading = true;
    form.value['ativo'] = this.isActiveItem(form.value['qtdeEstoque']);
    console.log(form.value);
    // this.sushiEstoqueService.saveEstoqueItem(form.value)
    //   .then( (response) => {
    //     this.showSuccessMessage = true;
    //     this.isLoading = false;
    //     this.successMessage = response['message'];
    //     setTimeout(() => {
    //       this.showSuccessMessage = false;
    //     }, 1500);
    //   })
  }

}
