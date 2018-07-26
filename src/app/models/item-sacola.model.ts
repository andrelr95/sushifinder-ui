import { Produto } from "./produto.model";

export class ItemSacola {
    public produto: Produto;
    public quantidade: number;
    public precoItem: number;

    constructor(produto: Produto, quantidade: number = 1, precoItem = 0){
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoItem = precoItem;
    }
}