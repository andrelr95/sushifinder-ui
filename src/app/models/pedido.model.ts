import { Produto } from "./produto.model";
import { Pessoa } from "./pessoa.model";
import { ItemSacola } from "./item-sacola.model";

export class Pedido {
    public comidas: ItemSacola[];
    public bebidas: ItemSacola[];
    public status: string;
    public _id: string;
    public numero: string;
    public precoTotal: number;
    public cliente: Pessoa;

    constructor(
        comidas: ItemSacola[],
        bebidas: ItemSacola[],
        status: string,
        _id: string,
        numero: string,
        precoTotal: number,
        cliente: Pessoa
    ) 
    {
        this.comidas = comidas;
        this.bebidas = bebidas;
        this.status = status;
        this._id = _id;
        this.numero = numero;
        this.precoTotal = precoTotal;
        this.cliente = cliente;
    }
}
