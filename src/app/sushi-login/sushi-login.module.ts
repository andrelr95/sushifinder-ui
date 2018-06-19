import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SushiLoginComponent } from './sushi-login.component';
import { SushiLoginService } from './sushi-login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
