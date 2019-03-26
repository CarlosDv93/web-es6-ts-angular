import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from './../ofertas.service';

@Component({
  selector: 'app2-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    
  }

  pesquisa(termoPesquisa : string) : void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoPesquisa);
    this.ofertas.subscribe(
      (ofertas: Oferta[])=> console.log(ofertas),
      (erro : any) => console.log('Erro status: ', erro.status),
      () => console.log("Complete!")
    );
  }

}
