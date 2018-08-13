import { Endereco } from './endereco.model';

export class Pessoa {
    public nome: string;
    public sobrenome: string;
    public cpf: string;
    public telefone: string;
    public sexo: string;
    public email: string;
    public dataNasc: string;
    public enderecos: Endereco[];

    constructor(
        nome: string,
        sobrenome: string,
        cpf: string,
        telefone: string,
        sexo: string,
        email: string,
        dataNasc: string,
        enderecos: Endereco[]
    ){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.sexo = sexo;
        this.email = email;
        this.dataNasc = dataNasc;
        this.enderecos = enderecos;
    }
}