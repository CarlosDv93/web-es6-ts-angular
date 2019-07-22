import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { URL_API } from './app.api' 

@Injectable()
export class OrdemCompraService {

    constructor(public http : HttpClient) { }

    public efetivarCompra(pedido : Pedido) : Observable<any> {
        console.log(pedido);

        let headers = new HttpHeaders({
            'Content-Type':'application/json',
        });

        let options = {
            headers,
        }

        return this.http.post(`${URL_API}/pedido`, JSON.stringify(pedido), options)
            .map((resposta : any) => {
                console.log(resposta);
                return resposta.id;
            })
    }
}