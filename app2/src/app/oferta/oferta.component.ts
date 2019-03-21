import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app2-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*Usando SnapShot para buscar parametro
    this.route.snapshot.params['id'];*/

    //Usando subscribe para buscar parametro
    this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    })
    
  }

}
