import { Cliente } from "../models/cliente.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as ENV } from "../../environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

const { host, path } = ENV.sushiFinderApi;

@Injectable()
export class AuthService {
    
    jwt = new JwtHelperService();
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    }
    
    isAdmin(): boolean {
        if(this.isAuthenticated()){
            let decoded = this.jwt.decodeToken(this.getToken());
            return decoded['roles'].some( elem => { return elem === 'admin' } );
        } else {
            return false;
        }
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
        return this.http.post(host + path.clientes, cliente, this.httpOptions)
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