import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { SushiCadastroComponent } from './sushi-cadastro/sushi-cadastro.component';
import { SushiCarrinhoComponent } from './sushi-main/sushi-carrinho/sushi-carrinho.component';
import { SushiEstoqueComponent } from './sushi-estoque/sushi-estoque.component';
import { SushiEstoqueEditComponent } from './sushi-estoque/sushi-estoque-edit/sushi-estoque-edit.component';
import { SushiEstoqueElementComponent } from './sushi-estoque/sushi-estoque-element/sushi-estoque-element.component';
import { SushiEstoqueService } from './sushi-estoque/sushi-estoque.service';
import { SushiLoginComponent } from './sushi-login/sushi-login.component';
import { SushiMainComponent } from './sushi-main/sushi-main.component';
import { SushiMainBebidaComponent } from './sushi-main/sushi-main-bebida/sushi-main-bebida.component';
import { SushiMainComidaComponent } from './sushi-main/sushi-main-comida/sushi-main-comida.component';
import { SushiMainItemComponent } from './sushi-main/sushi-main-item/sushi-main-item.component';
import { SushiMainNavComponent } from './sushi-main/sushi-main-nav/sushi-main-nav.component';
import { SushiMainService } from './sushi-main/sushi-main.service';
import { SushiNavComponent } from './sushi-nav/sushi-nav.component';
import { SushiPedidosComponent } from './sushi-pedidos/sushi-pedidos.component';
 

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
    SushiEstoqueElementComponent,
    SushiEstoqueEditComponent
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
  providers: [SushiMainService, AuthService, AuthGuard, SushiEstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
