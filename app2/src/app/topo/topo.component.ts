import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app2-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    
  }

  pesquisa(termoPesquisa : string) : void {
    console.log(termoPesquisa);
  }

}
