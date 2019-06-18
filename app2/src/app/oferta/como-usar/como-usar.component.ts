import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app2-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';
  constructor(private route: ActivatedRoute,
    private ofertaService: OfertasService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertaService.getComoUsarOfertaPorId(parametros.id).then((resolve: string) => {
        this.comoUsar = resolve;
      })
    })
  }


}
