import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas : Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);

    this.ofertasService.getOfertas()
    .then(/* Resolve */
      (ofertas: Oferta[]) => { 
        this.ofertas = ofertas; 
      }
    )
    .catch(/* Reject */ 
        (param: any) => { 
    
      }
    )
  }

}
