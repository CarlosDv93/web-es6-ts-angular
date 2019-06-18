import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco(endereco : string){
    this.endereco = endereco;
    console.log(endereco);
  }

  atualizaComplemento(complemento : string){
    this.complemento = complemento;
    console.log(complemento);
  }

  atualizaNumero(numero : string){
    this.numero  = numero;
    console.log(numero);
  }

  atualizaFormaPagamento(formaPagamento : string){
    this.formaPagamento  = formaPagamento;
    console.log(formaPagamento);
  }

}
