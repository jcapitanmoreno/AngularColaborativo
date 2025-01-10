import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnadirPersonajeComponent } from './pages/anadir-personaje/anadir-personaje.component';
import { BorrarPersonajeComponent } from './pages/borrar-personaje/borrar-personaje.component';
import { ChampionEditComponent } from './champion-edit/champion-edit.component';
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import {LoginGoogleComponent} from "./components/login-google/login-google.component";
import {AuthGuard} from "./guards/auth.guard";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hola-mundo', component: AnadirPersonajeComponent, canActivate: [AuthGuard]},
  { path: 'borrar-personaje', component: BorrarPersonajeComponent, canActivate: [AuthGuard] },
  { path: 'edit-champion', component: ChampionEditComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
  { path: 'login', component: LoginGoogleComponent }
];
