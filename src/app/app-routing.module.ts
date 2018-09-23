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

const appRoutes: Routes = [
    { path: 'main', canActivate: [AuthGuard],component: SushiMainComponent, children: [
       { path: 'comidas', component: SushiMainComidaComponent },
       { path: 'bebidas', component: SushiMainBebidaComponent } 
    ] },
    { path: 'cadastro', component: SushiCadastroComponent },
    { path: 'login', component: SushiLoginComponent },
    { path: 'estoque', canActivate: [AuthGuard, AuthAdminGuard], component: SushiEstoqueComponent },
    { path: 'pedidos', canActivate: [AuthGuard], component: SushiPedidosComponent },
    { path: 'proibido', component: SushiProibidoComponent }  
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}