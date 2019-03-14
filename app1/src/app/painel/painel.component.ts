import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

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
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

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
      //Troca a pergunta
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
  
    } else {
      
      this.tentativas--;

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }

    }
    
  }

  public atualizaRodada(): void {
    //troca a frase
    this.rodadaFrase = this.frases[this.rodada];

    //Colocar como vazia o textarea
    this.resposta = '';
  }

  ngOnDestroy() {
    
  }


}
