import { Produto } from "./produto.model";

export class ItemSacola {
    public item: Produto;
    public quantidade: number;
    public precoItem: number;

    constructor(produto: Produto, quantidade: number = 1, precoItem = 0){
        this.item = produto;
        this.quantidade = quantidade;
        this.precoItem = precoItem;
    }
}