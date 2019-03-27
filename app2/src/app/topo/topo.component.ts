import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app2-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<HttpResponse<Oferta[]>>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    
  }

  pesquisa(termoPesquisa : string) : void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoPesquisa);
    this.ofertas.subscribe(
      (ofertas: HttpResponse<Oferta[]>)=> {
        console.log(typeof ofertas)
        console.log("Ofertas que chegaram no Topo: ",ofertas.body);
        console.log("Headers: " + ofertas.headers.keys());
      },
      (erro : any) => console.log('Erro status: ', erro.status),
      () => console.log("Complete!")
    );
  }

}
