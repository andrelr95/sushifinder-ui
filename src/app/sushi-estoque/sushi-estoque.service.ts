import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as ENV } from "../../environments/environment";
import { AuthService } from '../auth/auth.service';
import { Ingrediente } from '../models/ingredientes.model';
const { host, path } = ENV.sushiFinderApi;

@Injectable()
export class SushiEstoqueService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.authService.getToken()
    }),
    params: undefined
  } 

  getEstoqueByDescription(term: string) {
    term = term.trim()

    return this.http.get(host + path.estoque, {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'x-access-token': this.authService.getToken() }),
      params: new HttpParams().set('descricao', term)
    }).toPromise()
  }

  getEstoque() {
    return this.http.get(host + path.estoque, this.httpOptions).toPromise();
  }

  updateEstoque(item: Ingrediente) {
    //TODO Update Logic
  }

  saveEstoqueItem(item: Ingrediente) {
    return this.http.post(host + path.estoque, item, this.httpOptions).toPromise();
  }
}

