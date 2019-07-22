import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service';
import { Oferta } from '../shared/oferta.model';
import 'rxjs/Rx';

@Component({
  selector: 'app2-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(private route: ActivatedRoute,
      private ofertaService: OfertasService,
      private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    console.log("Oferta - Array de itens do carrinho: ", this.carrinhoService.exibirItens());
    
   this.route.params.subscribe((parametros: Params)=> {
      
      //Usando SnapShot para buscar parametro
      this.ofertaService.getOfertaPorId(parametros.id)
        .then((ofertaResponse: any) => this.oferta = ofertaResponse);
    })
    
  }

  ngOnDestroy() {
  }

  public adicionarItemCarrinho() {
    //console.log(this.oferta);
    this.carrinhoService.incluirItem(this.oferta);
    console.log("Exibir Itens que estão no carrinho", this.carrinhoService.exibirItens());
  }

}
