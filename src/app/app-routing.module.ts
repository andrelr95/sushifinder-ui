import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SushiMainComponent } from "./sushi-main/sushi-main.component";
import { SushiCadastroComponent } from "./sushi-cadastro/sushi-cadastro.component";
import { SushiLoginComponent } from "./sushi-login/sushi-login.component";
import { SushiEstoqueComponent } from "./sushi-estoque/sushi-estoque.component";
import { SushiPedidosComponent } from "./sushi-pedidos/sushi-pedidos.component";
import { SushiMainComidaComponent } from "./sushi-main/sushi-main-comida/sushi-main-comida.component";
import { SushiMainBebidaComponent } from "./sushi-main/sushi-main-bebida/sushi-main-bebida.component";
import { SushiMainItemComponent } from "./sushi-main/sushi-main-item/sushi-main-item.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { SushiProibidoComponent } from "./sushi-proibido/sushi-proibido.component";
import { AuthAdminGuard } from "./auth/auth-admin-guard.service";
import { SushiProdutoComponent } from "./sushi-produto/sushi-produto.component";
import { SushiPedidosAdminComponent } from "./sushi-pedidos-admin/sushi-pedidos-admin.component";
import { SushiPedidosClienteComponent } from "./sushi-pedidos-cliente/sushi-pedidos-cliente.component";
import { SushiFaturamentoComponent } from "./sushi-faturamento/sushi-faturamento.component";

const appRoutes: Routes = [
    { path: 'cardapio', canActivate: [AuthGuard],component: SushiMainComponent, children: [
       { path: 'comidas', component: SushiMainComidaComponent },
       { path: 'bebidas', component: SushiMainBebidaComponent } 
    ] },
    { path: 'cadastro', component: SushiCadastroComponent },
    { path: 'login', component: SushiLoginComponent },
    { path: 'estoque', canActivate: [AuthGuard, AuthAdminGuard], component: SushiEstoqueComponent },
    { path: 'pedidos', canActivate: [AuthGuard, AuthAdminGuard], component: SushiPedidosAdminComponent },
    { path: 'confirmar-pedido', canActivate: [AuthGuard], component: SushiPedidosComponent },
    { path: 'faturamentos', canActivate: [AuthGuard, AuthAdminGuard], component: SushiFaturamentoComponent},
    { path: 'acompanhar-pedidos', canActivate: [AuthGuard], component: SushiPedidosClienteComponent },
    { path: 'produtos', canActivate: [AuthGuard, AuthAdminGuard], component: SushiProdutoComponent },
    { path: 'proibido', component: SushiProibidoComponent }  
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}