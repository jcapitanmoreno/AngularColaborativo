import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnadirPersonajeComponent } from './pages/anadir-personaje/anadir-personaje.component';
import { BorrarPersonajeComponent } from './pages/borrar-personaje/borrar-personaje.component';
import { ChampionEditComponent } from './champion-edit/champion-edit.component';
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import {LoginGoogleComponent} from "./pages/login-google/login-google.component";
import {AuthGuard} from "./guards/auth.guard";
import {SuggestionsFormComponent} from "./pages/suggestions-form/suggestions-form.component";
import {ChampionListComponent} from "./champion-list/champion-list.component";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'champion-list', component: ChampionListComponent },
  { path: 'hola-mundo', component: AnadirPersonajeComponent, canActivate: [AuthGuard]},
  { path: 'borrar-personaje', component: BorrarPersonajeComponent, canActivate: [AuthGuard] },
  { path: 'edit-champion', component: ChampionEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginGoogleComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'suggestions-form', component: SuggestionsFormComponent },
  { path: '**', component: NotFoundComponent }
];
