export class Ingrediente {
    public descricao: string;
    public tipo: string;
    public qtdeEstoque: number;
    public ativo: boolean;

    constructor(desc: string, tipo:string, qtdeEstoque:number, ativo:boolean){
        this.descricao = desc;
        this.tipo = tipo;
        this.qtdeEstoque = qtdeEstoque;
        this.ativo = ativo;
    }
}