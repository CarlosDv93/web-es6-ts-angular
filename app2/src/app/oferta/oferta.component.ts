import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs/';
import 'rxjs/Rx';

@Component({
  selector: 'app2-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;

  public oferta: Oferta;

  constructor(private route: ActivatedRoute,
      private ofertaService: OfertasService) { }

  ngOnInit() {
    //Usando SnapShot para buscar parametro
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((ofertaResponse: any) => this.oferta = ofertaResponse);

    /*//Usando subscribe para buscar parametro
    this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    })*/

    /*
    // Exemplo de Observable
    this.route.params.subscribe(
      (parametros: any) => {console.log(parametros); }, //Quando dá certo
      (error: any) => { console.log(error)}, //Quando tem algum erro
      () => { console.log("Processamento foi Classificado como Concluido")} //Quando está concluido
    )
    */

    let tempo = Observable.interval(2000);
    this.tempoObservableSubscription = tempo.subscribe(arg => console.log(arg));
    

    //observable (observável)
    let observavel = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream');
      observer.next('Segundo evento da stream');
      //observer.complete();
      observer.next('Terceiro evento da stream');
      observer.error('Algum erro foi encontrado na stream de eventos');
      observer.complete();
    })

    //observable (observador - ao se dar subscribe, vira o observable)
    this.meuObservableTesteSubscription= observavel.subscribe(
      (resultado : any) => { console.log(resultado)},
      (error: any) => { console.log(error)},
      () => { console.log('Evento Completo')}
    );
  }

  ngOnDestroy() {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }

}
