import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao : string = "Traduça a Frase: ";
  public frases : Frase[] = FRASES;
  public resposta : string = '';
  public rodada : number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta : Event) : void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() : void {
    if(this.resposta == this.rodadaFrase.frasePtBr){
      alert('A tradução está correta!')
      
      //Troca a pergunta
      this.rodada++;
      this.progresso = (100 / this.frases.length);

      this.atualizaRodada();
  
    } else {
      alert('A frase está errada!')
    }
    
  }

  public atualizaRodada(): void {
    //troca a frase
    this.rodadaFrase = this.frases[this.rodada];

    //Colocar como vazia o textarea
    this.resposta = '';
  }


}
