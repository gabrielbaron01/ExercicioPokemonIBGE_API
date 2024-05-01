import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './components/pokedex/pokedex.component';
import { EstadosListComponent } from './components/ibge/estados-ibge/estados-ibge.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'estados', component: EstadosListComponent },
    { path: '**', component: HomeComponent }
];
