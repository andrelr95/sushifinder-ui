import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../models/cliente.model';
import { Endereco } from '../models/endereco.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-sushi-cadastro',
  templateUrl: './sushi-cadastro.component.html',
  styleUrls: ['./sushi-cadastro.component.scss']
})
export class SushiCadastroComponent implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  model: any = {};

  ngOnInit() {

  }

  onSignUp({ value }: NgForm){
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
  }

}
