import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      /* transition('escondido => visivel', animate('1s ease-in')),
      transition('visivel => escondido', animate('1s ease-in')) 
      //Pode ser abaixo, como poder o de cime... as Setas indicam sentidos que a transição occore, ou seja, as 
      // 2 linhas acimam fazem o mesmo que a linha abaixo */
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado : string = 'visivel';

  constructor() { }

  ngOnInit() {
  }

  public toggleEstado(){
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

}
