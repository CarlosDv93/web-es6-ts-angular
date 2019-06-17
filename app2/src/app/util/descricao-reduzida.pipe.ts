import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto: string, truncarEm: number) : string {
        if(texto.length >= truncarEm) {
            return texto.substr(0, truncarEm) + '...';
        } else {
            return texto;
        }
    }

    /* //3 Parametros --> Uso: nomePipe:param1:param2 --> descricaoReduzida:15:2
        transform(texto: string, truncarEm: number, iniciarEm: number) : string {
        if(texto.length >= truncarEm) {
            return texto.substr(iniciarEm, truncarEm) + '...';
        } else {
            return texto;
        }
    }
    */
}