import { Pessoa } from './pessoa.model';
import { Endereco } from './endereco.model';

export class Cliente {
    senha: string;
    roles: string[];
    pessoa: Pessoa;

    constructor(
        senha: string, 
        roles: string[],
        pessoa: Pessoa
        ){
        this.senha = senha;
        this.roles = roles;
        this.pessoa = pessoa;
    }
}



// import { Pessoa } from './pessoa.model';
// import { Endereco } from './endereco.model';

// export class Cliente extends Pessoa {
//     senha: string;
//     roles: string[];

//     constructor(
//         senha: string, 
//         roles: string[],
//         nome: string,
//         sobrenome: string,
//         cpf: string,
//         telefone: string,
//         sexo: string,
//         email: string,
//         dataNasc: string,
//         enderecos: Endereco[]
//         ){
//         super(
//             nome,
//             sobrenome,
//             cpf,
//             telefone,
//             sexo,
//             email,
//             dataNasc,
//             enderecos    
//         );
//         this.senha = senha;
//         this.roles = roles;
//     }
// }