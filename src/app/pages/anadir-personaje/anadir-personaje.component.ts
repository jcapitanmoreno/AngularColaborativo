import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChampionService } from '../../services/champion.service';
import { Champion } from '../../models/champion';
import {ChampionSectionAddComponent} from "../../champion-section-add/champion-section-add.component";

@Component({
  selector: 'app-anadir-personaje',
  standalone: true,
  templateUrl: './anadir-personaje.component.html',
  styleUrl: './anadir-personaje.component.css',
  imports: [ReactiveFormsModule, ChampionSectionAddComponent]
})
export class AnadirPersonajeComponent {
  championForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private championService: ChampionService
  ) {
    this.championForm = this.fb.group({
      anoLanzamiento: ['', Validators.required],
      especie: ['', Validators.required],
      genero: ['', Validators.required],
      nombre: ['', Validators.required],
      posicion: ['', Validators.required],
      recurso: ['', Validators.required],
      region: ['', Validators.required],
      tipoAtaque: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.championForm.valid) {
      const newChampion: Champion = this.championForm.value;
      this.championService.addChampion(newChampion)
        .then(() => {
          alert('Campeón añadido con éxito');
          this.championForm.reset();
        })
        .catch(error => {
          console.error('Error al añadir campeón:', error);
        });
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}
