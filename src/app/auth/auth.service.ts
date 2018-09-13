import { Cliente } from "../models/cliente.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as ENV } from "../../environments/environment";
const { host, path } = ENV.sushiFinderApi;

@Injectable()
export class AuthService {
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    }

    constructor(private http: HttpClient) {}

    getToken(){
        return localStorage.getItem('token');
    }

    getUser(){
        return localStorage.getItem('user');
    }

    isAuthenticated(){
        return this.getToken() != null;
    }

    signUpUser(cliente: Cliente){
        return this.http.post(host + path.authenticate, cliente, this.httpOptions)
    }

    signInUser(email: string, password: string){
        let body = {
            "usuario": email,
            "senha": password
        }
        return this.http.post(host + path.authenticate, body, this.httpOptions)
            .toPromise();
    }

    signOutUser(){
        localStorage.clear();
    }

}