import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-cadastro',
  templateUrl: './sushi-cadastro.component.html',
  styleUrls: ['./sushi-cadastro.component.scss']
})
export class SushiCadastroComponent implements OnInit {

  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  
  }

  onSignUp(form: NgForm){
    console.log(form.value)
  }

}
