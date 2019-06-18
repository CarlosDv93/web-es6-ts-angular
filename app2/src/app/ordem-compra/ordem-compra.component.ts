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

  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco(endereco : string){
    this.endereco = endereco;
    if(this.endereco.length > 3){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizaComplemento(complemento : string){
    this.complemento = complemento;
    if(this.complemento.length > 3){
      this.complementoValido = true;
    }
    console.log(complemento);
  }

  atualizaNumero(numero : string){
    this.numero  = numero;
    if(this.numero.length > 0){
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    console.log(numero);
  }

  atualizaFormaPagamento(formaPagamento : string){
    this.formaPagamento  = formaPagamento;
    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    console.log(formaPagamento);
  }

}
