import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Champion } from '../models/champion';
import { ChampionService } from '../services/champion.service';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-champion-edit',
  templateUrl: './champion-edit.component.html',
  styleUrls: ['./champion-edit.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class ChampionEditComponent implements OnInit {
  champion: Champion | null = null;
  loading: boolean = true;

  constructor(
    private router: Router,
    private championService: ChampionService  // Inyecta el servicio
  ) {}

  ngOnInit() {
    this.championService.getChampionFromService().pipe(
      tap((championFromService) => {
        if (championFromService) {
          this.champion = championFromService;
          this.loading = false;
        } else {
          console.error('No champion found in the service');
        }
      }),
      catchError((error) => {
        console.error('Error retrieving champion:', error);
        this.loading = false;
        return of(null); // Devuelve un valor seguro en caso de error
      })
    ).subscribe();
  }


  saveChampion() {
    if (this.champion && this.champion.id) {

      const updatedChampion: Partial<Champion> = {};

      // Solo asignamos valores si están presentes
      if (this.champion.anoLanzamiento) {
        updatedChampion.anoLanzamiento = this.champion.anoLanzamiento;
      }
      if (this.champion.especie) {
        updatedChampion.especie = this.champion.especie;
      }
      if (this.champion.genero) {
        updatedChampion.genero = this.champion.genero;
      }
      if (this.champion.nombre) {
        updatedChampion.nombre = this.champion.nombre;
      }
      if (this.champion.posicion) {
        updatedChampion.posicion = this.champion.posicion;
      }
      if (this.champion.recurso) {
        updatedChampion.recurso = this.champion.recurso;
      }
      if (this.champion.region) {
        updatedChampion.region = this.champion.region;
      }
      if (this.champion.tipoAtaque) {
        updatedChampion.tipoAtaque = this.champion.tipoAtaque;
      }

      // Llamamos al servicio para actualizar el campeón con los campos no vacíos
      this.championService.updateChampion(this.champion.id, updatedChampion)
        .then(() => {
          console.log('Champion updated successfully');

        })

        .catch((error) => {
          console.error('Error updating champion:', error);
          alert('Ocurrió un error al actualizar el campeón. Intente nuevamente.');
        });
    } else {
      console.error('Champion data is missing or invalid.');
      alert('No se pudo encontrar el campeón o los datos son incompletos.');
    }
  }
}
