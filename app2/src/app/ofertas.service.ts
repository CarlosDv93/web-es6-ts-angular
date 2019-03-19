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
        return this.http.get('http://localhost:3000/ofertas')
        .toPromise()
        .then( (ofertasResposta : any) => ofertasResposta);
    }

    
}