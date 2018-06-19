import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sushi-login',
  templateUrl: './sushi-login.component.html',
  styleUrls: ['./sushi-login.component.scss']
})
export class SushiLoginComponent implements OnInit {

  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(form);
  }


}
