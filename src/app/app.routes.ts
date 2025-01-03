import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnadirPersonajeComponent } from './pages/anadir-personaje/anadir-personaje.component';
import { BorrarPersonajeComponent } from './pages/borrar-personaje/borrar-personaje.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hola-mundo', component: AnadirPersonajeComponent },
    { path: 'borrar-personaje', component: BorrarPersonajeComponent },
];