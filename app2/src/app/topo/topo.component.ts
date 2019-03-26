import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app2-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pesquisa(evento : Event) : void {
    console.log((<HTMLInputElement>evento.target).value);
  }

}
