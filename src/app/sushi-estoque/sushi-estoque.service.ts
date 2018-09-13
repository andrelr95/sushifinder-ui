import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as ENV } from "../../environments/environment";
const { host, path } = ENV.sushiFinderApi;

@Injectable()
export class SushiEstoqueService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  } 

  getEstoque() {
    return this.http.get(host + path.estoque, this.httpOptions).toPromise();
  }
}
