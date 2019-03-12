import { Carro } from './Carro';

export class Concessionaria {
    private endereco : string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, carros : Carro[]){
        this.endereco = endereco;
        this.listaDeCarros = carros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}
