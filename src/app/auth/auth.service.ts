import { Cliente } from "../models/cliente.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    serverUrl: string = "http://localhost:3000";

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
        return this.http.post(this.serverUrl + '/clientes', cliente, this.httpOptions)
    }

    signInUser(email: string, password: string){
        let body = {
            "usuario": email,
            "senha": password
        }
        return this.http.post(this.serverUrl + '/authenticate', body, this.httpOptions)
            .toPromise();
    }

    signOutUser(){
        localStorage.clear();
    }

}