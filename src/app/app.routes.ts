import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {PokemonComponent} from "./component/pokemon/pokemon.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'external', component: PokemonComponent },
];
