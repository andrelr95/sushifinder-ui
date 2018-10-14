import { Ingrediente } from './ingredientes.model';

export class Produto {
    public _id: string;
    public descricao: string;
    public preco: number;
    public ativo: boolean;
    public tipo: string;
    public ingredientes: Ingrediente[];

    constructor(_id: string, desc: string, preco: number, ativo: boolean, tipo: string, ingredientes: Ingrediente[]){
        this._id = _id;
        this.descricao = desc;
        this.preco = preco;
        this.ativo = ativo;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
    }
}