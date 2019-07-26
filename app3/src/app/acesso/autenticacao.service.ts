import { Usuario } from './usuario.model';

export class Autenticacao {
    public cadastrarUsuario(usuario: Usuario) : void {
        console.log("Chegamos até o serviço com o param: " , usuario);
        
    }
}