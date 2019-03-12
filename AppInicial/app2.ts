import { Concessionaria } from './Concessionaria';
import { Carro } from './Carro';
import { Pessoa } from './Pessoa';

/* --- Criar Carros --- */
let carroA = new Carro("Ferrari", 4);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Cerato", 4)

/* --- Montar Lista de Carros da Concessionária --- */
let carros : Array<Carro> = [carroA, carroB, carroC];

/* --- Criar a concessionaria --- */
let concessionaria = new Concessionaria("Rua Teste, 999 - Bairro Alagado", carros);

/* --- Mostrar a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());

/* --- Criar Pessoas --- */
let cliente = new Pessoa("Carlos", "Veloster");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
