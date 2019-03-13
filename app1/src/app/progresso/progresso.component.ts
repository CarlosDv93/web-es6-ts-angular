import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input('progresso') public progresso : number = 0; //Nao é necessário informar o progresso.

  constructor() { }

  ngOnInit() {
  }

}
