# App1

Projeto do Curso de [Dev WEB es6 Angular e TS](https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4)

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) na versão 7.2.1.

## Explicações Durante o Curso

```

ng generate component tentativas = ng g c tentativas
--spec=false => Faz com que o arquivo de teste não seja criado (pode ser usado o --skipTest)

```
## Instalar Versão do [Bootstrap](https://getbootstrap.com/)
Tem duas maneiras de fazer isso:

* MPN
* CDN

Foi optado pelo mpn

## Dicas
## Angular
### String Interpolation
Nas strings interpolation '{{}}' podem ser usadas expressões matemáticas e atributos da classe principal do componente em que este html está sendo usado. Pode ser usado em qualquer parte do código.

Exemplo: 
```
<div>
    Resultado: {{2 + 2}}
</div>
```

Resultará em:
```
    Resultado: 4
```
### Property Binding
Especifico para certos atributos. No caso da aula que foi apresentado o Property Binding as imagens das "vidas" restantes (tentativas). 

Exemplo:
```
* HTML
<img [src]="coracaoVazio">

* TS
public coracaoVazio : string = '/src/assets/imagemCoracaoVazio.png';
```

O angular interpretará essa chamada e irá na classe desse html (o arquivo TS) buscar uma variável com o nome coracaoVazio para preencher a imagem. Resultado será:
```
A imagem do atributo
```


### Event Binding
Capturar eventos para realizar ações. É usado usando (). Existem várias ações que podem ser capturados. (input, click, focus, keyup, etc)

Exemplo:
```
* HTML
<button (onClick)="alerta()">

* TS
public alerta(): { }
```

O resultado será que ao clicar no botão, será chamado o método alerta().

#### NÃO usar string interpolation e property binding juntos. Ou um ou o outro. Eles podem ser usado em conjunto com o event binding. ???