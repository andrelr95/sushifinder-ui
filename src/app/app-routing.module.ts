import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SushiMainComponent } from "./sushi-main/sushi-main.component";
import { SushiCadastroComponent } from "./sushi-cadastro/sushi-cadastro.component";

const appRoutes: Routes = [
    { path: 'main', component: SushiMainComponent },
    { path: 'cadastro', component: SushiCadastroComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}