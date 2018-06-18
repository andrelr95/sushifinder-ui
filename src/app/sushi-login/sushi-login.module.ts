import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SushiLoginComponent } from './sushi-login.component';
import { SushiLoginService } from './sushi-login.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    SushiLoginComponent
  ],
  providers: [
    SushiLoginService
  ]
})
export class SushiLoginModule { }
