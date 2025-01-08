import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Champion } from '../models/champion';
import { Router } from '@angular/router';
import {ChampionService} from "../services/champion.service";

@Component({
  selector: 'app-champion-card',
  standalone: true,
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.css'],
  imports: [CommonModule]
})
export class ChampionCardComponent {
  @Input() champion!: Champion;

  constructor(private router: Router, private championService: ChampionService) {}

  editChampion(champion: Champion) {
    this.championService.setChampion(champion);
    this.router.navigate(['/edit-champion']);
  }
}
