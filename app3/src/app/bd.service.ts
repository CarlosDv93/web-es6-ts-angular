import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { Progresso } from './progresso.service';

@Injectable()
export class BD {

    constructor(private progresso: Progresso) { }

    public publicar(publicacao: any): void {

        //console.log(publicacao);

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

    public consultaPublicacoes(email: string): Promise<any> {

        return new Promise((resolve, reject) => {
            firebase.database().ref(`publicacoes/${btoa(email)}`)
                .once('value')
                .then((snapshot) => {
                   //console.log(snapshot.val());

                    let publicacoes: Array<any> = [];

                    snapshot.forEach((childSnapshot: any) => {

                        let publicacao = childSnapshot.val();
                        publicacao.key = childSnapshot.key;
                        publicacoes.push(publicacao);
                    })
                    

                    return publicacoes.reverse();

                })
                .then((publicacoes) => {
                    //console.log(publicacoes);

                    publicacoes.forEach((publicacao) => {
                        firebase.storage().ref()
                        .child(`imagens/${publicacao.key}`)
                        .getDownloadURL()
                        .then((url: string) => {

                            publicacao.urlImagem = url;

                            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                .orderByKey()
                                .once('value')
                                .then((snapshot: any) => {
                                    publicacao.nomeUsuario = snapshot.val().usuario;
                                });
                        })
                    })
                    resolve(publicacoes);
                })
                
        });
    }
}