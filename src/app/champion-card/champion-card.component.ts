import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Champion } from '../models/champion';
import { Router } from '@angular/router';
import {ChampionService} from "../services/champion.service";
import {ChampionImageComponent} from "../champion-image/champion-image.component";

@Component({
  selector: 'app-champion-card',
  standalone: true,
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css'],
  imports: [CommonModule, ChampionImageComponent]
})
export class ChampionCardComponent {
  @Input() champion!: Champion;

  constructor(private router: Router, private championService: ChampionService) {}

  editChampion(champion: Champion) {
    this.championService.setChampion(champion);
    this.router.navigate(['/edit-champion']);
  }
}
