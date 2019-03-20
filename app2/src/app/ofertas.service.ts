import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

//Import do toPromise
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private httpClientModule : HttpClientModule,
        private http : HttpClient){

    }
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then( (ofertasResposta : any) => ofertasResposta);
    }

    public getOfertasPorCategoria(categoria:string) : Promise<Array<Oferta>> {
        //pode concatenar as string ou usar o backtip (` - crase) e usar o binding
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((ofertasRestaurante : any) => ofertasRestaurante);
    }
}