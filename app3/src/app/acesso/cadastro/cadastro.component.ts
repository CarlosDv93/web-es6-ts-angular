import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ FormGroup, FormControl ]
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel : EventEmitter<string> = new EventEmitter<string>();

  public formularioCadastro: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nomeCompleto': new FormControl(null),
    'usuario': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor() { }

  ngOnInit() {
  }


  public exibePainelLogin(event) : void {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario() {
    console.log(this.formularioCadastro);
  }

}
