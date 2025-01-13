import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChampionListComponent } from '../../champion-list/champion-list.component';
import {LoginGoogleComponent} from "../login-google/login-google.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChampionListComponent, LoginGoogleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
