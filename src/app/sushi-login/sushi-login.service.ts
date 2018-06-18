import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class SushiLoginService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private authUrl: string = 'localhost:3000/authenticate';

  private handleError(err: any): Promise<any>{
    console.log('Error: ', err);
    return Promise.reject(err.message || err);
  }

  constructor(
    private http: HttpClient
  ) {}

  authenticate(user, password): Promise<any>{
    let authUser = {
      usuario: user,
      senha: password,     
    }
    return this.http.post(this.authUrl, JSON.stringify(authUser), {headers: this.headers})
      .toPromise()
      .then(response => localStorage.setItem('authorization', JSON.stringify(response)))
      .catch(this.handleError);
  }
}
