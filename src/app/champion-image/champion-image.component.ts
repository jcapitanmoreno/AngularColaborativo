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

  ngOnInit(): void {
    this.fetchChampionImage();
  }


  private async fetchChampionImage(): Promise<void> {
    try {
      const url = await this.championService.getChampionImageUrl(this.championName);
      this.imageUrl = url;
      this.errorMessage = null;
    } catch (error) {
      this.imageUrl = null;
      this.errorMessage = `No se encontró la imagen para "${this.championName}".`;
      console.error('Error al obtener la imagen del campeón:', error);
    }
  }


}
