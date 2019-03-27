import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000) //executa a ação do switchMap após 1 segundo
      .switchMap((termo: string) => {
        console.log('Requisição HTTP para a API ');
        
        if(termo.trim() === ''){
          //retornar um observable de Array de ofertas vazio 
          //return Observable.of<Oferta[]>([]);
          //|| 
          //retornar um Observable<HttpResponse<Oferta[]>> vazio
          return Observable.of<HttpResponse<Oferta[]>>();
          
        }
          return this.ofertasService.pesquisaOfertas(termo)
      })

    this.ofertas.subscribe(
      (ofertaRetorno) => {
        console.log('Retorno da API - subscribe', ofertaRetorno);
      }
    )
  }

  pesquisa(termoPesquisa : string) : void {
    console.log('Key Up caracter: ' + termoPesquisa);
    this.subjectPesquisa.next(termoPesquisa)
  }

}
