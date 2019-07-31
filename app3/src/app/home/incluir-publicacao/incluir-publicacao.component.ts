import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BD } from 'src/app/bd.service';
import { Progresso } from 'src/app/progresso.service';
import * as firebase from 'firebase';
import { interval, Subject, Observable } from 'rxjs';
import { map, tap, takeUntil} from 'rxjs/operators';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil'; 
import 'rxjs';


@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {


  public email: string;
  public imagem;
  public progressoPublicacao: string = 'pendente';
  public porcentagemUpload: number = 0;
  @Output() public atualizarTimeline: EventEmitter<any> = new EventEmitter<any>()

  private formulario: FormGroup = new FormGroup({
    'titulo': new FormControl()
  })

  constructor(private bd: BD, private progresso: Progresso) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    })
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email, 
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    });

    let continua = new Subject();
    let acompanhamentoUpload = interval(1500).pipe(takeUntil(continua));
    continua.next(true);

    acompanhamentoUpload
    .subscribe(()=> {
          this.progressoPublicacao = 'andamento'

          this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes)*100);

          if(this.progresso.status === 'concluido'){
            this.progressoPublicacao = 'concluido';
            continua.next(false);

            //emitir um evento para o pai
            this.atualizarTimeline.emit();
          }
    })
  }

  public preparaImagemUpload(event: Event) :void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }

}
