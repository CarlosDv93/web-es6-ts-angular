import { Coracao } from './../shared/coracao,model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes : Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  @Input() public tentativas: number;

  constructor() {
    
  }

  ngOnInit() {
  
  }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length){
      
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice-1].cheio = false;
    }
    
  }

}
