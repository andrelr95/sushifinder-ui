import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment as ENV } from "../../environments/environment";
const { host, path } = ENV.sushiFinderApi;

@Injectable()
export class SushiClientesService {

  constructor( private http: HttpClient,
               private authService: AuthService ) { }

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.authService.getToken()
    }),
    params: undefined
  }

  getClientes() {
    return this.http.get(host.concat(path.clientes), this.httpOptions).toPromise();
  }

  delete(id: string) {
    const uri = `/${id}`;
    console.log(host.concat(path.clientes).concat(uri));

    return this.http.delete(host.concat(path.clientes).concat(uri), this.httpOptions).toPromise();
  }

}
