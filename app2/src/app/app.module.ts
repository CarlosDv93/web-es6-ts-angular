import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
registerLocaleData(localePt);