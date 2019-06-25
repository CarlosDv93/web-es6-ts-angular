import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app2-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {


  public endereco: string = '';
  public numero : string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //Controles de Validação
  public enderecoValido : boolean;
  public numeroValido : boolean;
  public complementoValido : boolean;
  public formaPagamentoValido : boolean;

  //controle do estadoPrimitivo (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //controlar botão confirmar Compra
  public formEstado: string = "disabled";

  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco(endereco : string){
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    if(this.endereco.length > 3){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  atualizaComplemento(complemento : string){
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 3){
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  atualizaNumero(numero : string){
    this.numero  = numero;
    this.numeroEstadoPrimitivo = false;

    if(this.numero.length > 0){
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
  }

  atualizaFormaPagamento(formaPagamento : string){
    this.formaPagamento  = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    
    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }


  public habilitaForm(): void {
    if( this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true){
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

}
