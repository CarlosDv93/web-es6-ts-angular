import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel : EventEmitter<string> = new EventEmitter<string>();

  public formulario: FormGroup = new FormGroup
  ({
    'email': new FormControl(null),
    'nomeCompleto': new FormControl(null),
    'usuario': new FormControl(null),
    'senha': new FormControl(null)
  })

  public usuario : Usuario;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  public exibePainelLogin(event) : void {
    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario() {
    console.log(this.formulario);

    this.usuario = new Usuario(this.formulario.value.nomeCompleto, this.formulario.value.email,
      this.formulario.value.usuario, this.formulario.value.senha);

    console.log(this.usuario);
  }

}
