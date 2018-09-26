import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SushiEstoqueService } from '../sushi-estoque.service';
import { Ingrediente } from '../../models/ingredientes.model';
import { NgModel, NgForm } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import  { switchMap }  from 'rxjs/operators';

@Component({
  selector: 'app-sushi-estoque-edit',
  templateUrl: './sushi-estoque-edit.component.html',
  styleUrls: ['./sushi-estoque-edit.component.scss']
})
export class SushiEstoqueEditComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService) { }

  // @Output() updateIngredientList = new EventEmitter<void>();
  // @Output() searchResultList = new EventEmitter<Ingrediente[]>();
  ingredientes: Observable<void>;
  private seachTerm: Subject<string> = new Subject<string>();

  isLoading: boolean = false;
  showSuccessMessage: boolean = false;
  successMessage: string = '';
  tiposItem = ['ingrediente', 'bebida'];

  ngOnInit() {
    this.ingredientes = this.seachTerm
      .pipe(switchMap((term) => {
        return this.sushiEstoqueService.getEstoqueByDescription(term);
      }))

      this.ingredientes.subscribe((ingredientes) => { console.log("ANDRE: ", ingredientes) } )
  }

  isActiveItem(ingredienteQuantidade: number): boolean {
    return ingredienteQuantidade > 0;
  }

  onSearchItem(term: string) {
    console.log(term)
    this.seachTerm.next(term);
    
  }
  
  onSaveItem(form: NgForm) {
    this.isLoading = true;
    form.value['ativo'] = this.isActiveItem(form.value['qtdeEstoque']);
    console.log(form.value);
    this.sushiEstoqueService.saveEstoqueItem(form.value)
    .then((response) => {
      this.showSuccessMessage = true;
      this.isLoading = false;
      this.successMessage = response['message'];
      setTimeout(() => {
        // this.updateIngredientList.emit();
        this.showSuccessMessage = false;
      }, 1500);
    })
  }
  
}

// this.seachTerm = (<HTMLInputElement>event.target).value.toString();
// this.sushiEstoqueService.getEstoqueByDescription(this.seachText)
//   .then((response: Ingrediente[]) => {
//       this.searchResultList.emit(response);
//       console.log('onSearchItem: ', response);
//   });