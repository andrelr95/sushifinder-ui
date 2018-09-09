import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sushi-nav',
  templateUrl: './sushi-nav.component.html',
  styleUrls: ['./sushi-nav.component.scss']
})
export class SushiNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLogged: boolean = false;

  ngOnInit() {
    this.isLogged = this.authService.isLogged();
    console.log("INICIEL");
  }

}
