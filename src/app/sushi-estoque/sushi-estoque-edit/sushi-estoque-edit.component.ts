import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  @Input() ingrediente: Ingrediente;

  @Output() updateIngredientList = new EventEmitter<void>();
  @Output() searchResultList = new EventEmitter<Ingrediente[]>();

  isLoading: boolean = false;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  seachText: string = '';
  tiposItem = ['ingrediente', 'bebida'];


  ngOnInit() {
    console.log(this.ingrediente);
  }

  onLog() {
    console.log(this.ingrediente);
  }

  onClear(){
    this.ingrediente = undefined;
  }

  isActiveItem(ingredienteQuantidade: number): boolean {
    return ingredienteQuantidade > 0;
  }

  onSearchItem(event: KeyboardEvent) {
    setTimeout(() => {
      this.seachText = (<HTMLInputElement>event.target).value;
      this.sushiEstoqueService.getEstoqueByDescription(this.seachText)
        .then((response: Ingrediente[]) => {
          this.searchResultList.emit(response);
          console.log('onSearchItem: ', response);
        });
    }, 1000)
  }

  onSaveItem(form: NgForm) {
    this.isLoading = true;
    form.value['ativo'] = this.isActiveItem(form.value['qtdeEstoque']);
    console.log(form.value);

    if (this.ingrediente === undefined) {
      this.sushiEstoqueService.saveEstoqueItem(form.value)
        .then((response) => {
          console.log('CRIANDO');
          this.showSuccessMessage = true;
          this.isLoading = false;
          this.successMessage = response['message'];
          setTimeout(() => {
            this.updateIngredientList.emit();
            this.showSuccessMessage = false;
          }, 1500);
        })
    } else {
      this.sushiEstoqueService.updateEstoque(form.value, this.ingrediente['_id'])
        .then((response) => {
          console.log('ATUALIZANDO');
          this.showSuccessMessage = true;
          this.isLoading = false;
          this.successMessage = response['message'];
          setTimeout(() => {
            this.updateIngredientList.emit();
            this.showSuccessMessage = false;
          }, 1500);
        })
    }
  }

}
