import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnadirPersonajeComponent } from './pages/anadir-personaje/anadir-personaje.component';
import { BorrarPersonajeComponent } from './pages/borrar-personaje/borrar-personaje.component';
import { ChampionEditComponent } from './champion-edit/champion-edit.component';
import { NotFoundComponent } from "./pages/not-found/not-found.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hola-mundo', component: AnadirPersonajeComponent },
  { path: 'borrar-personaje', component: BorrarPersonajeComponent },
  { path: 'edit-champion', component: ChampionEditComponent },
  { path: '**', component: NotFoundComponent }
];
