import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { Progresso } from './progresso.service';

@Injectable()
export class BD {

    constructor(private progresso: Progresso) { }

    public publicar(publicacao: any): void {

        console.log(publicacao);

        let nomeImagem;

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((resposta: any) => {
                nomeImagem = resposta.key;

                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => {
                            this.progresso.status = 'andamento';
                            this.progresso.estado = snapshot;
                        },
                        (error: Error) => {
                            this.progresso.status = 'erro';
                        },
                        () => { //Finalização do Processo
                            this.progresso.status = 'concluido';

                        }
                    );
            })

    }
}