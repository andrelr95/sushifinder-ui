import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SushiEstoqueService } from '../../sushi-estoque/sushi-estoque.service';
import { Ingrediente } from '../../models/ingredientes.model';
import { Produto } from '../../models/produto.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SushiProdutoService } from '../sushi-produto.service';
import { Subject, Observable, ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-sushi-produto-edit',
  templateUrl: './sushi-produto-edit.component.html',
  styleUrls: ['./sushi-produto-edit.component.scss']
})
export class SushiProdutoEditComponent implements OnInit {

  constructor(private sushiEstoqueService: SushiEstoqueService,
    private sushiProdutoService: SushiProdutoService) { }

  @Input() selectedProdutoReceived: Produto;
  @Output() updateProductsList = new EventEmitter<void>();
  @Output() searchResultList = new EventEmitter<Produto[]>();

  tipoProdutos: string[] = ['comida', 'bebida'];

  selectedIngrediente: Ingrediente;
  ingredientes: Ingrediente[] = [];
  ingredientesSelected: Subject<Ingrediente> = new Subject<Ingrediente>();
  ingredientesSelectedToShow: Ingrediente[] = [];

  addProdutoForm: FormGroup;

  isLoading: boolean = false;
  seachText: string = '';
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  ngOnInit() {
    this.sushiEstoqueService.getEstoqueByType('ingrediente')
      .then((response: Ingrediente[]) => {
        this.ingredientes = response;
      })
      .catch(err => console.log(err));


    this.ingredientesSelected.subscribe((response) => {
      this.ingredientesSelectedToShow.push(response);
    })

    this.addProdutoForm = new FormGroup({
      'descricao': new FormControl(null),
      'preco': new FormControl(null),
      'ingredientes': new FormArray([]),
      'tipo': new FormControl('comida')
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (this.addProdutoForm) {
      console.log(this.selectedProdutoReceived)
      this.addProdutoForm.get('descricao').setValue(this.selectedProdutoReceived.descricao)
      this.addProdutoForm.get('preco').setValue(this.selectedProdutoReceived.preco);
      this.addProdutoForm.get('tipo').setValue(this.selectedProdutoReceived.tipo);
      this.addProdutoForm.get('ingredientes').reset();
      this.onClearIngredients();
      this.selectedProdutoReceived.ingredientes.forEach((ingrediente) => {
        const ingredienteId = ingrediente['_id'];
        const ingredienteSelected = this.ingredientes.find((ingrediente) => ingrediente['_id'] === ingredienteId);
        const control = new FormControl(ingredienteId);
        this.ingredientesSelected.next(ingredienteSelected);
        (<FormArray>this.addProdutoForm.get('ingredientes')).push(control)
      })
    }
  }

  onAddIngrediente(ingrediente) {
    const ingredienteId = ingrediente.value;
    const ingredienteSelected = this.ingredientes.find((ingrediente) => ingrediente['_id'] === ingredienteId);
    const control = new FormControl(ingredienteId);

    this.ingredientesSelected.next(ingredienteSelected);

    (<FormArray>this.addProdutoForm.get('ingredientes')).push(control)
  }

  onClearIngredients() {
    this.ingredientesSelectedToShow = [];
    while ((<FormArray>this.addProdutoForm.get('ingredientes')).length !== 0) {
      (<FormArray>this.addProdutoForm.get('ingredientes')).removeAt(0);
    }
  }

  onLog() {
    console.log(this.addProdutoForm.get('tipo').value === 'comida');
  }

  onClear() {
    this.selectedProdutoReceived = undefined;
    this.addProdutoForm = new FormGroup({
      'descricao': new FormControl(null),
      'preco': new FormControl(null),
      'ingredientes': new FormArray([]),
      'tipo': new FormControl('comida')
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.addProdutoForm.value['ativo'] = true;

    if (this.selectedProdutoReceived === undefined) {
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
    } else {
      this.sushiProdutoService.updateProdutoItem(this.selectedProdutoReceived, this.addProdutoForm.value)
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


  }

  onSearchItem(event: KeyboardEvent) {
    setTimeout(() => {
      this.seachText = (<HTMLInputElement>event.target).value;
      this.sushiProdutoService.getProdutosByDescription(this.seachText)
        .then((response: Produto[]) => {
          this.searchResultList.emit(this.sortArrayByBoolean(response));
          console.log('onSearchItem: ', response);
        });
    }, 1000)
  }

  sortArrayByBoolean(arr: any[]): any[] {
    return arr.sort((a, b) => { return (a.ativo === b.ativo) ? 0 : a.ativo ? -1 : 1 });
  }
}
