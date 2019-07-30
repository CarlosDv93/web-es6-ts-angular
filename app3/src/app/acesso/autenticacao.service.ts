import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import * as firebase from 'firebase'
import { Injectable } from '@angular/core';

@Injectable()
export class Autenticacao {

    public token_id : string;

    constructor(private router: Router) { }

    public cadastrarUsuario(usuario: Usuario) : Promise<any> {
        console.log("Chegamos até o serviço com o param: " , usuario);

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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
                firebase.auth().currentUser.getIdToken().then((idToken: string) => {
                    this.token_id = idToken;
                    localStorage.setItem('idToken', this.token_id);
                    this.router.navigate(['/home']);
                });
            })
            .catch((erro: Error) => {
                console.log(erro);
            })
    }

    public autenticado(): boolean {
        
        if(this.token_id === undefined && localStorage.getItem('idToken') !== null) {
            this.token_id = localStorage.getItem('idToken');
        }

        if(this.token_id === undefined) {
            this.router.navigate(["/"]); 
        }

        return this.token_id !== undefined;
    }

    public logoff(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken');
                this.token_id = undefined;
                this.router.navigate(['/']);
            })
    }
}