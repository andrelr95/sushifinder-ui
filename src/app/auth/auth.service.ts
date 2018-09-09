import { Cliente } from "../models/cliente.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    }

    serverUrl: string = "http://localhost:3000"

    constructor( private http: HttpClient) {}

    getToken(){}

    signUpUser(cliente: Cliente){
        return this.http.post(this.serverUrl + '/clientes', cliente, this.httpOptions)
    }

    signInUser(email: string, password: string){
        let body = {
            "usuario": email,
            "senha": password
        }

        return this.http.post(this.serverUrl + '/authenticate', body, this.httpOptions)
        .toPromise()
        .then((response) => {
            localStorage.setItem('token', response['token']);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}