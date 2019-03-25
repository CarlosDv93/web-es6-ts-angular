import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app2-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica : string = '';

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id'];
    this.ofertasService.getOndeFicaPorId(id)
      .then((descricao : string) => {
        this.ondeFica = descricao;
      })
  }

}
