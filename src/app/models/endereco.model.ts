export class Endereco {

    public logradouro: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public cep: string;

    constructor(
        logradouro: string, 
        numero: string, 
        complemento: string,
        bairro: string,
        cidade: string,
        estado: string,
        cep: string
    ) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
}