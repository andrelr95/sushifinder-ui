import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { SushiLoginComponent } from './sushi-login/sushi-login.component';
import { SushiMainComponent } from './sushi-main/sushi-main.component';
import { SushiNavComponent } from './sushi-nav/sushi-nav.component';
import { SushiCadastroComponent } from './sushi-cadastro/sushi-cadastro.component';
import { SushiCarrinhoComponent } from './sushi-main/sushi-carrinho/sushi-carrinho.component';
import { SushiPedidosComponent } from './sushi-pedidos/sushi-pedidos.component';
import { SushiEstoqueComponent } from './sushi-estoque/sushi-estoque.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SushiMainComidaComponent } from './sushi-main/sushi-main-comida/sushi-main-comida.component';
import { SushiMainBebidaComponent } from './sushi-main/sushi-main-bebida/sushi-main-bebida.component';
import { SushiMainItemComponent } from './sushi-main/sushi-main-item/sushi-main-item.component';
import { SushiMainNavComponent } from './sushi-main/sushi-main-nav/sushi-main-nav.component';
import { SushiEstoqueElementComponent } from './sushi-estoque/sushi-estoque-element/sushi-estoque-element.component';
import { SushiMainService } from './sushi-main/sushi-main.service';
import { AuthService } from './auth/auth.service';
 

@NgModule({
  declarations: [
    AppComponent,
    SushiLoginComponent,
    SushiMainComponent,
    SushiNavComponent,
    SushiCadastroComponent,
    SushiPedidosComponent,
    SushiMainItemComponent,
    SushiCarrinhoComponent,
    SushiEstoqueComponent,
    SushiMainComidaComponent,
    SushiMainBebidaComponent,
    SushiMainNavComponent,
    SushiEstoqueElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgDatepickerModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SushiMainService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
