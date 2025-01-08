import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChampionService} from '../services/champion.service';
import {Champion} from '../models/champion';
import {PlaceholderComponent} from "../placeholder/placeholder.component";
import {NoDataMessageComponent} from "../no-data-message/no-data-message.component";

@Component({
  selector: 'app-delete-champion-list',
  standalone: true,
  templateUrl: './delete-champion-list.component.html',
  styleUrl: './delete-champion-list.component.css',
  imports: [CommonModule, PlaceholderComponent, NoDataMessageComponent]
})
export class DeleteChampionListComponent {
  champions: Champion[] = [];
  filteredChampions: Champion[] = [];
  isLoading: boolean = true;

  constructor(private championService: ChampionService) {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe({
      next: (data) => {
        this.champions = data;
        this.filteredChampions = this.champions;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener los campeones', err);
        this.isLoading = false;
      },
    });
  }

  filterChampions(text: string) {
    if (!text) {
      this.filteredChampions = this.champions;
      return;
    }

    this.filteredChampions = this.champions.filter(champion => champion.nombre.toLowerCase().includes(text.toLowerCase()));
  }

  deleteChampion(champion: Champion) {
    if (champion.id) {
      this.championService.deleteChampion(champion.id).then(() => {
        this.getChampions();
      }).catch((err) => {
        console.error('Error al borrar el campeon', err);
      });
    }
  }
}
