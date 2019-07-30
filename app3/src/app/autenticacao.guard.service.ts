import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from './acesso/autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate{
    
    constructor(private autenticacao: Autenticacao) { }


    public canActivate(): boolean {

        return this.autenticacao.autenticado();

    }
    
}