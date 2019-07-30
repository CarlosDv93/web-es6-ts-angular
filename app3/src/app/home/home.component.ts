import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../acesso/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autentitacao: Autenticacao) { }

  ngOnInit() {
  }

  public sair(){
    this.autentitacao.logoff();
  }

}
