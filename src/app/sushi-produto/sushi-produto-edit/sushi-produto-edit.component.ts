import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SushiEstoqueService } from '../../sushi-estoque/sushi-estoque.service';
import { Ingrediente } from '../../models/ingredientes.model';
import { Produto } from '../../models/produto.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SushiProdutoService } from '../sushi-produto.service';

@Component({
  selector: 'app-sushi-produto-edit',
  templateUrl: './sushi-produto-edit.component.html',
  styleUrls: ['./sushi-produto-edit.component.scss']
})
export class SushiProdutoEditComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService,
              private sushiProdutoService: SushiProdutoService) { }

  tipoProdutos: string[] = ['comida', 'bebida'];
  ingredientes: Ingrediente[] = [];
  addProdutoForm: FormGroup;
  selectedIngrediente: Ingrediente;
  isLoading: boolean = false;
  seachText: string = '';
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  @Output() updateProductsList = new EventEmitter<void>();
  @Output() searchResultList = new EventEmitter<Produto[]>();

  ngOnInit() {
    this.sushiEstoqueService.getEstoqueByType('ingrediente')
      .then((response: Ingrediente[]) => {
        this.ingredientes = response;
      })
      .catch(err => console.log(err));

    this.addProdutoForm = new FormGroup({
      'descricao': new FormControl(null),
      'preco': new FormControl(null),
      'ingredientes': new FormArray([]),
      'tipo': new FormControl('comida')
    });
  }

  onAddIngrediente(ingrediente) {
    console.log(ingrediente);
    const control = new FormControl(ingrediente.value);
    console.log(control);
    (<FormArray>this.addProdutoForm.get('ingredientes')).push(control)
  }

  onClearIngredients() {
    while((<FormArray>this.addProdutoForm.get('ingredientes')).length !== 0){
      (<FormArray>this.addProdutoForm.get('ingredientes')).removeAt(0);
    }
  }

  onLog() {
    console.log(this.addProdutoForm.get('tipo').value === 'comida');
  }

  onSubmit() {
    this.isLoading = true;
    this.addProdutoForm.value['ativo'] = true;
    console.log(this.addProdutoForm.value);

    this.sushiProdutoService.saveProdutoItem(this.addProdutoForm.value)
    .then(response => {
      this.showSuccessMessage = true;
      this.successMessage = response['message'];
      this.isLoading = false;
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.updateProductsList.emit();
      }, 1000);
    })
    .catch(err => console.log(err));

  }

  onSearchItem(event: KeyboardEvent) {
    setTimeout(() => {
      this.seachText = (<HTMLInputElement>event.target).value;
      this.sushiProdutoService.getProdutosByDescription(this.seachText)
        .then((response: Produto[]) => {
          this.searchResultList.emit(response);
          console.log('onSearchItem: ', response);
        });
    }, 1000)
  }
}
