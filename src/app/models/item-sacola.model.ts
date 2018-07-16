import { Produto } from "./produto.model";

export class ItemSacola {
    private produto: Produto;
    private quantidade: number;

    constructor(produto: Produto, quantidade: number = 1){
        this.produto = produto;
        this.quantidade = quantidade;
    }

}