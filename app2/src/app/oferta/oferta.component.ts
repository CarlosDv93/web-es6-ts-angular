import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app2-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private oferta: Oferta;

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
    
  }

}
