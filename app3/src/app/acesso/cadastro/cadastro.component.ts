import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public exibePainelLogin(event) : void {
    this.exibirPainel.emit('login');
  }

}