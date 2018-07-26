import { Ingrediente } from './ingredientes.model';

export class Produto {
    public id: number;
    public descricao: string;
    public preco: number;
    public ativo: boolean;
    public tipo: string;
    public img: string;
    public ingredientes: Ingrediente[];

    constructor(id: number, desc: string, preco: number, ativo: boolean, tipo: string, img:string ,ingredientes: Ingrediente[]){
        this.id = id;
        this.descricao = desc;
        this.preco = preco;
        this.ativo = ativo;
        this.img = img;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
    }
}