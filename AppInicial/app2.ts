class Carro {
    private modelo : string;
    private numeroDePortas : number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroPortas: number){
        this.modelo=modelo;
        this.numeroDePortas = numeroPortas;
    }

    public acelerar() : void {
        this.velocidade = this.velocidade+10;
    }

    public parar() : void {
        this.velocidade = 0;
    }

    public velocidadeAtual() : number {
        return this.velocidade;
    }
}

class Concessionaria {
    private endereco : string;
    private listaDeCarros: any;

    constructor(endereco: string){
        this.endereco = endereco;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros;
    }
}

class Pessoa {
    private nome : string;
    private carroPreferido: string;
    private carro: any;

    constructor(nome: string, carroPreferido: string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome() : string{
        return this.nome;
    }

    public dizerCarroPreferido() : string {
        return this.carroPreferido;
    }

    public comprarCarro(modelo : any) : void {
        this.carro = modelo;
    }

    public dizerCarroQueTem() {
        return this.carro;
    }
}

let pessoa = new Pessoa("Carlos", "Ferrari");
console.log(pessoa.dizerCarroPreferido());