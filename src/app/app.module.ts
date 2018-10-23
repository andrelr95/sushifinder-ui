import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SushiProibidoComponent } from './sushi-proibido/sushi-proibido.component';
import { AuthAdminGuard } from './auth/auth-admin-guard.service';
import { SushiProdutoComponent } from './sushi-produto/sushi-produto.component';
import { SushiProdutoItemComponent } from './sushi-produto/sushi-produto-item/sushi-produto-item.component';
import { SushiProdutoEditComponent } from './sushi-produto/sushi-produto-edit/sushi-produto-edit.component';
import { SushiProdutoService } from './sushi-produto/sushi-produto.service';
import { SushiPedidoService } from './sushi-pedidos/sushi-pedido.service';
import { SushiPedidosAdminComponent } from './sushi-pedidos-admin/sushi-pedidos-admin.component';
 

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
    SushiEstoqueEditComponent,
    SushiProibidoComponent,
    SushiProdutoComponent,
    SushiProdutoItemComponent,
    SushiProdutoEditComponent,
    SushiPedidosAdminComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgDatepickerModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SushiMainService, AuthService, AuthGuard, AuthAdminGuard, SushiEstoqueService, SushiProdutoService, SushiPedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
