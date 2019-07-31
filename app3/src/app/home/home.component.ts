import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../acesso/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any;

  constructor(private autentitacao: Autenticacao) { }

  ngOnInit() {
  }

  public sair(){
    this.autentitacao.logoff();
  }

  public atualizarTimeLine():void {
    this.publicacoes.atualizarTimeLine();
  }

}
