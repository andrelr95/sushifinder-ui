import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sushi-login',
  templateUrl: './sushi-login.component.html',
  styleUrls: ['./sushi-login.component.scss']
})
export class SushiLoginComponent implements OnInit {

  password: string;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signInUser(email, password)
      .then((response) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', response['data']);
        if(this.authService.isAdmin()) this.router.navigate(['/estoque']);
        else this.router.navigate(['/main/comidas']);
      })
      .catch((error) => {
        this.errorMessage = error.error['message'];
      })
    
  }


}
