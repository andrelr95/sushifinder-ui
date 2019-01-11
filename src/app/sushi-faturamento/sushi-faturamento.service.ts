import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SushiFaturamentoService {

    constructor(private authService: AuthService,
                private http: HttpClient){}
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.authService.getToken()
        }),
        params: undefined
      }

      getFaturamentosById(codigo: string) {
        return this.http.get(`http://localhost:3000/faturamentos/${codigo}`, this.httpOptions)
            .toPromise();
      }
}