import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router'
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: '/restaurantes', component: RestauranteComponent},
    {path: 'diversao', component: DiversaoComponent}
]