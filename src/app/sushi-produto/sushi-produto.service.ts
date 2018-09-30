import { Injectable } from '@angular/core';
import { environment as ENV } from "../../environments/environment";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Produto } from '../models/produto.model';
const { host, path } = ENV.sushiFinderApi;

@Injectable({
  providedIn: 'root'
})
export class SushiProdutoService {

  constructor(private http: HttpClient, 
              private authService: AuthService) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.authService.getToken()
    }),
    params: undefined
  } 

  saveProdutoItem(item: Produto) {
    return this.http.post(host + '/produtos', item, this.httpOptions).toPromise();
  }

}
