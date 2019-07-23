import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { CarrinhoService } from '../carrinho.service';
import { Pedido } from '../shared/pedido.model'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });

  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];

  constructor(private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    console.log("OrdemCompra - Array de itens do carrinho: ", this.carrinhoService.exibirItens());
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {

      if (this.carrinhoService.exibirItens().length === 0) {
        alert("Você não selecionou nenhum item!");
      } else {

        let pedido: Pedido = new Pedido(this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
        );

        console.log(pedido);

        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((pedido: number) => {
            this.idPedidoCompra = pedido;
            this.carrinhoService.limparCarrinho();
          })

      }
    }
  }

  public adicionar(item: ItemCarrinho) {
    console.log(item);
    this.carrinhoService.adicionarQuantidade(item);
  }

  public subtrair(item: ItemCarrinho) {
    this.carrinhoService.subtrairQuantidade(item);
  }

}
