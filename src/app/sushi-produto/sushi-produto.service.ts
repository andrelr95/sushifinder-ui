import { Injectable } from '@angular/core';
import { environment as ENV } from "../../environments/environment";

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  updateProdutoItem(produto: Produto, item: Produto) {
    delete item['_id']
    return this.http.put(host + `/produtos/${produto['_id']}`, item, this.httpOptions).toPromise();
  }

  getProdutos() {
    return this.http.get(host + '/produtos', this.httpOptions).toPromise();
  }

  getProdutosByType(type: string) {
    return this.http.get(host + '/produtos/itens/tipo', {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'x-access-token': this.authService.getToken() }),
      params: new HttpParams().set('tipo', type)
    }).toPromise();
  }
  

  getProdutosByDescription(term: string){
    term = term.trim();
    return this.http.get(host + '/produtos', {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'x-access-token': this.authService.getToken() }),
      params: new HttpParams().set('descricao', term)
    }).toPromise()
  }

  updateStatus(produto: Produto, status: boolean) {
    return this.http.put(host + `/produtos/${produto['_id']}`, { ativo: status }, this.httpOptions).toPromise();
  }

  deleteProduto(produto: Produto){
    return this.http.delete(host + `/produtos/${produto['_id']}`, this.httpOptions).toPromise();
  }

}
