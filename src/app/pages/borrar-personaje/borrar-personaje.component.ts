import { Component } from '@angular/core';
import { DeleteChampionListComponent } from "../../delete-champion-list/delete-champion-list.component";



@Component({
  selector: 'app-borrar-personaje',
  standalone: true,
  imports: [DeleteChampionListComponent],
  templateUrl: './borrar-personaje.component.html',
  styleUrl: './borrar-personaje.component.css'
})
export class BorrarPersonajeComponent {

}
