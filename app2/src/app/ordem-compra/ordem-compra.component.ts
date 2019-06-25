import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app2-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  //Pedido
  public pedido : Pedido = new Pedido('', '', '', '');

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

  constructor(public ordemCompraService : OrdemCompraService) { }

  ngOnInit() {

    //this.ordemCompraService.efetivarCompra();

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

  public confirmarCompra() : void {
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.numero = this.numero;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((retorno: any) => {
        console.log("Retorno API Pedidos: ", retorno);
      })
  }

}
