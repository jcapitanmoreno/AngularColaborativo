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
    try {
      this.imageUrl = await this.championService.getChampionSplashArtUrl(this.championName);
      console.log('URL de la Splash Art:', this.imageUrl);  // Verifica la URL generada
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }


  private async fetchChampionImage(): Promise<void> {
    try {
      const url = await this.championService.getChampionSplashArtUrl(this.championName);
      this.imageUrl = url;
      this.errorMessage = null;
    } catch (error) {
      this.imageUrl = null;
      this.errorMessage = `No se encontró la imagen para "${this.championName}".`;
      console.error('Error al obtener la imagen del campeón:', error);
    }
  }


}
