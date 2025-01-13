import { Component } from '@angular/core';
import { DeleteChampionListComponent } from "../../delete-champion-list/delete-champion-list.component";
import {ChampionSectionDeleteComponent} from "../../champion-section-delete/champion-section-delete.component";



@Component({
  selector: 'app-borrar-personaje',
  standalone: true,
  imports: [DeleteChampionListComponent, ChampionSectionDeleteComponent],
  templateUrl: './borrar-personaje.component.html',
  styleUrl: './borrar-personaje.component.css'
})
export class BorrarPersonajeComponent {

}
