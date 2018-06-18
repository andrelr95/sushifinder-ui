import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sushi-login',
  templateUrl: './sushi-login.component.html',
  styleUrls: ['./sushi-login.component.scss']
})
export class SushiLoginComponent implements OnInit {

  model:any = {
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.model.password);
  }


}
