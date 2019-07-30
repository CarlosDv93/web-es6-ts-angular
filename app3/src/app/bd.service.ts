import * as firebase from 'firebase/app';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';

export class BD {
    public publicar(publicacao: any) : void {

        console.log(publicacao);

        let nomeImagem = Date.now();

        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    console.log(snapshot);
                },
                (error: Error) => {
                    console.log(error);
                },
                () => { //Finalização do Processo
                    console.log("Upload Completo")
                }
                );

        /* firebase.database().ref(`/publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo}); */

        console.log("Chegamos até o serviço responsável pelo controle de dados")
    }
}