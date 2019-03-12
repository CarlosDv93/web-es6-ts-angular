"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
/* --- Criar Carros --- */
var carroA = new Carro_1.Carro("Ferrari", 4);
var carroB = new Carro_1.Carro("Veloster", 3);
var carroC = new Carro_1.Carro("Cerato", 4);
/* --- Montar Lista de Carros da Concessionária --- */
var carros = [carroA, carroB, carroC];
/* --- Criar a concessionaria --- */
var concessionaria = new Concessionaria_1.Concessionaria("Rua Teste, 999 - Bairro Alagado", carros);
/* --- Mostrar a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());
/* --- Criar Pessoas --- */
var cliente = new Pessoa_1.Pessoa("Carlos", "Veloster");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
