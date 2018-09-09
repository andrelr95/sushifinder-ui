import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sushi-login',
  templateUrl: './sushi-login.component.html',
  styleUrls: ['./sushi-login.component.scss']
})
export class SushiLoginComponent implements OnInit {

  password: string;
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signInUser(email, password)
      .then((response) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', response['data']);
        this.authService.setUserLogged(true);
        console.log(this.authService.isLogged());
        console.log('LOGUEI')
      })
      .catch((error) => {
        this.errorMessage = error.error['message'];
      })
    
  }


}
