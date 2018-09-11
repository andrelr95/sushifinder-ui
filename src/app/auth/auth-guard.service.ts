import { 
    CanActivate, 
    RouterStateSnapshot, 
    ActivatedRouteSnapshot, 
    Router
} from "@angular/router";

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuthenticated()){
            console.log("TRUE")
            return true;
        } else {
            console.log("DEVERIA NAVEGAR")
            this.router.navigate(['/login'])
        }
        
    }
}