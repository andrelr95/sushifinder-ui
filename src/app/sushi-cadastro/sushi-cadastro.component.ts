import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../models/cliente.model';
import { Endereco } from '../models/endereco.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Pessoa } from '../models/pessoa.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sushi-cadastro',
  templateUrl: './sushi-cadastro.component.html',
  styleUrls: ['./sushi-cadastro.component.scss']
})
export class SushiCadastroComponent implements OnInit {

  faCoffee = faCoffee;
  isLoading: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  model: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  onSignUp({ value }: NgForm){

    this.isLoading = true;

    console.log(value);
    console.log(this.model);
    const { 
      inputAddress, 
      inputAddressNumber, 
      inputAddressNumberComplement, 
      inputAddressZipCode, 
      inputBairro,
      inputBirthDate,
      inputCity,
      inputCpf,
      inputEmail,
      inputName,
      inputPassword,
      inputSexo,
      inputState,
      inputSurname,
      inputTel } = value;
    const endereco = new Endereco(inputAddress, inputAddressNumber, inputAddressNumberComplement, inputBairro, inputCity, inputState, inputAddressZipCode);
    const pessoa = new Pessoa(inputName, inputSurname, inputCpf, inputTel, inputSexo, inputEmail, inputBirthDate, [endereco]);
    const andre = new Cliente(inputPassword, pessoa);
    console.log(JSON.stringify(andre));  

    this.authService.signUpUser(andre)
      .toPromise()
      .then( (response) => {
          setTimeout(() => {
            this.successMessage = response['message'];
            this.showSuccessMessage = true;
            this.showErrorMessage = !this.showSuccessMessage;
            this.isLoading = false;
          }, 2000);
          this.router.navigate(['/login']);
        } )
      .catch( (error) => {
        this.isLoading = false;
        this.errorMessage = error.error;
        console.log(this.errorMessage);
        this.showErrorMessage = true;
        this.showSuccessMessage = !this.showErrorMessage;
      } )
  }

}
