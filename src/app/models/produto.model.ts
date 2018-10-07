import { Ingrediente } from './ingredientes.model';

export class Produto {
    public id: number;
    public descricao: string;
    public preco: number;
    public ativo: boolean;
    public tipo: string;
    public ingredientes: Ingrediente[];

    constructor(id: number, desc: string, preco: number, ativo: boolean, tipo: string, ingredientes: Ingrediente[]){
        this.id = id;
        this.descricao = desc;
        this.preco = preco;
        this.ativo = ativo;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
    }
}