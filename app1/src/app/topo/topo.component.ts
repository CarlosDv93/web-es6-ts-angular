import { Component } from '@angular/core';

@Component({
    selector: 'app-topo', //pode ser feito como tag (sem nada) - Como parametro passando usando [] - Como classe colocando um . antes do nome
    templateUrl: './topo.component.html',
    //template : '<p> Esse é o componente topo</p>' //Com aspas simples ' é pra ficar tudo em uma linha
    /*template: `<p> //Já com crase, pode quebrar linha;
            Esse é o componente topo
        </p>`*/
    //styles: [' .exemplo { color: red} '] //pra quebrar linha usar as crases `
    styleUrls : ['./topo.component.css'] //pode passar mais de um
})
export class TopoComponent{
    public titulo: string = 'Aprendendo Inglês';
}