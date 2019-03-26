import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
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
      private ofertaService: OfertasService) { }

  ngOnInit() {
    //Usando SnapShot para buscar parametro
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((ofertaResponse: any) => this.oferta = ofertaResponse);
  }

  ngOnDestroy() {
  }

}
