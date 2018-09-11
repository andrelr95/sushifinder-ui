import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sushi-nav',
  templateUrl: './sushi-nav.component.html',
  styleUrls: ['./sushi-nav.component.scss']
})
export class SushiNavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  isLogged: boolean = false;

  ngOnInit() {}

  onSignOutUser(){
    this.authService.signOutUser();
    this.router.navigate(['/login']);
  }

}
