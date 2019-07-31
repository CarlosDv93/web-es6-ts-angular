import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { Progresso } from './progresso.service';

@Injectable()
export class BD {

    constructor(private progresso : Progresso) { }

    public publicar(publicacao: any) : void {

        console.log(publicacao);

        let nomeImagem = Date.now();

        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    this.progresso.status = 'andamento';
                    this.progresso.estado = snapshot;
                    // console.log("Spanshot: ", snapshot);
                },
                (error: Error) => {
                    this.progresso.status = 'erro';
                    // console.log(error);
                },
                () => { //Finalização do Processo
                    this.progresso.status = 'concluido';
                    // console.log("Upload Completo")
                }
                );

        /* firebase.database().ref(`/publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo}); */

        console.log("Chegamos até o serviço responsável pelo controle de dados")
    }
}