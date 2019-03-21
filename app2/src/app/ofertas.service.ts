import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

//Import do toPromise
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000/ofertas';

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){

    }
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url_api}?destaque=true`)
        .toPromise()
        .then( (ofertasResposta : any) => ofertasResposta);
    }

    public getOfertasPorCategoria(categoria:string) : Promise<Array<Oferta>> {
        //pode concatenar as string ou usar o backtip (` - crase) e usar o binding
        return this.http.get(`${this.url_api}?categoria=${categoria}`)
        .toPromise()
        .then((ofertasRestaurante : any) => ofertasRestaurante);
    }

    public getOfertaPorId(id:number): Promise<Oferta> {
        return this.http.get(`${this.url_api}?id=${id}`)
            .toPromise()
            .then((ofertaId: any) => ofertaId[0]);
    }
}