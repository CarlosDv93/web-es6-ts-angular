import { Usuario } from './usuario.model';
import * as firebase from 'firebase'

export class Autenticacao {
    public cadastrarUsuario(usuario: Usuario) : void {
        console.log("Chegamos até o serviço com o param: " , usuario);

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                //remove a senha do atributo senha
                delete usuario.senha;

                //registra dados complementares do usuario no path email na base64
                //btoa -> Critptografa
                //atob -> descriptografa
                let emailCripto = btoa(usuario.email);
                console.log(emailCripto);

                let database = firebase.database();
                console.log("Database: ", database);
                firebase.database().ref(`usuario_detalhe/${emailCripto}`)
                    .set( usuario );
            })
            .catch((erro: Error) => {
                console.log(erro);
            })
    }

    public autenticar(email: string, senha: string) : void {
        console.log("Email" + email + "Senha" + senha);
        
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta) => {
                console.log(resposta);
            })
            .catch((erro: Error) => {
                console.log(erro);
            })
    }
}