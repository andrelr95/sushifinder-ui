import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SushiLoginComponent } from './sushi-login/sushi-login.component';
import { SushiMainComponent } from './sushi-main/sushi-main.component';
import { SushiNavComponent } from './sushi-nav/sushi-nav.component';
import { SushiCadastroComponent } from './sushi-cadastro/sushi-cadastro.component';
import { SushiPedidosComponent } from './sushi-pedidos/sushi-pedidos.component';
import { SushiEstoqueComponent } from './sushi-estoque/sushi-estoque.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    AppComponent,
    SushiLoginComponent,
    SushiMainComponent,
    SushiNavComponent,
    SushiCadastroComponent,
    SushiPedidosComponent,
    SushiEstoqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
