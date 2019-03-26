import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer } from 'rxjs';
//import 'rxjs/Rx';

@Component({
  selector: 'app2-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

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

    //observable (observável)
      let observavel = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da stream');
      })

    //observable (observador - ao se dar subscribe, vira o observable)
      observavel.subscribe(
        (resultado : any) => { console.log(resultado)}
      )
  }

}
