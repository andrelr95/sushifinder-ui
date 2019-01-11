import { Produto } from "./produto.model";

export class PrePedido {
    public produtos: Produto[];
    public precoTotal: number;

    constructor(produtos: Produto[], precoTotal: number) {
        this.produtos = produtos;
        this.precoTotal = precoTotal;
    }
}