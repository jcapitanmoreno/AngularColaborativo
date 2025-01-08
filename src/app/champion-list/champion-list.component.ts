import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../models/champion';
import { ChampionCardComponent } from '../champion-card/champion-card.component';



@Component({
  selector: 'app-champion-list',
  standalone: true,
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
  imports: [CommonModule, ChampionCardComponent], 
})

export class ChampionListComponent implements OnInit {
  champions: Champion[] = []; 
  isLoading: boolean = true;  

  constructor(private championService: ChampionService) {
    
  }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe({
      next: (data) => {
        this.champions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener los campeones', err);
        this.isLoading = false;
      },
    });
  }
}
