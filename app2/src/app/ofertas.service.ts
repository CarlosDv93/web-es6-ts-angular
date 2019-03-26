import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

import { URL_API } from './app.api';

//Import do toPromise
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas';

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){

    }
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
        .then( (ofertasResposta : any) => ofertasResposta);
    }

    public getOfertasPorCategoria(categoria:string) : Promise<Array<Oferta>> {
        //pode concatenar as string ou usar o backtip (` - crase) e usar o binding
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((ofertasRestaurante : any) => ofertasRestaurante);
    }

    public getOfertaPorId(id:number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((ofertaId: any) => ofertaId[0]);
    }

    public getComoUsarOfertaPorId(id:number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            })
    }

    public getOndeFicaPorId(id : number) : Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            })
    }
}