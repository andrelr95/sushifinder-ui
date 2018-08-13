import { Pessoa } from './pessoa.model';

export class Cliente extends Pessoa {
    senha: string;
    roles: string[];
}