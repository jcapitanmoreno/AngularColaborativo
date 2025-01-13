import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from "../services/champion.service";


@Component({
  selector: 'app-champion-image',
  standalone: true,
  templateUrl: './champion-image.component.html',
  styleUrls: ['./champion-image.component.css'],
  imports: [CommonModule],
  providers: [ChampionService],
})
export class ChampionImageComponent implements OnInit {
  @Input() championName!: string;
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
      this.imageUrl = "/assets/images/markdown.png";
      this.errorMessage = `No se pudo cargar la imagen para "${this.championName}".`;
      console.error('Error al obtener la imagen del campeón:', error);
    }
  }




}
