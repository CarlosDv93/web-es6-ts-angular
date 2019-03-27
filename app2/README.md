# App2

Projeto do APP2 do curso de desenvolvimento mobile completo.

# Dicas úteis citadas/aprendidas durante o curso.

## Usar HTTPResponse no lugar do Json padrão de resposta

    O padrão de resposta já é o body do HTTPResponse caso não colocado o parametro para buscar a response

Vide o [commmit master 4bdf9b6](https://github.com/CarlosDv93/web-es6-ts-angular/commit/4bdf9b6b51eb71915c45e812eb05d5b9b0f64c91) que contém como ter a resposta completa de uma requisição e como usar. 
Caso não seja necessário, ver os mesmos arquivos que no [commit anterior](https://github.com/CarlosDv93/web-es6-ts-angular/tree/271f395d0269a0e55d7e4cee89e1156c3d0ac07c).

#### Simplificando: 

Para ter a resposta completa, tem que ser um `Observable<HttpResponse<T>>`, mas para ter a resposta direta, somente um `Observable<T>`.

Lembrando de adicionar `{ observe: 'response' }` como parametro da requisição para retornar a response completa HTTP e não somente o body - como é por padrão

## Lógica para criar algum observable vazio

Para criar um observable vazio, usado na aula 155 - seção 11 - pesquisa por string vazia, depende do tipo de retorno. 

Caso for retornar um observable de Array de ofertas vazio: `Observable<Oferta[]>` 
    return Observable.of<Oferta[]>([]);
`OU` 
caso for retornar um observable que é um ResponseHTTP de um Array de Ofertas vazio: `Observable<HttpResponse<Oferta[]>>`

    return Observable.of<HttpResponse<Oferta[]>>(); 


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
