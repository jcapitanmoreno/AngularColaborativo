import { Component, Input, OnInit } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-champion-image-edit',
  templateUrl: './champion-image-edit.component.html',
  styleUrls: ['./champion-image-edit.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [ChampionService],
})
export class ChampionImageEditComponent implements OnInit {
  @Input() championName: string = '';
  imageUrl: string | null = null;
  errorMessage: string | null = null;

  constructor(private championService: ChampionService) {}

  async ngOnInit() {
    if (!this.championName) {
      this.errorMessage = 'Nombre del campeón no proporcionado.';
      return;
    }

    try {
      this.imageUrl = await this.championService.getChampionSplashArtUrl(this.championName);
      this.errorMessage = null;
    } catch (error) {
      this.imageUrl = null;
      this.errorMessage = `No se pudo cargar la imagen para "${this.championName}".`;
      console.error('Error al obtener la imagen del campeón:', error);
    }
  }
}
