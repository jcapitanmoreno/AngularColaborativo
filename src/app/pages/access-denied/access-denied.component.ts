import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  standalone: true,
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent {
  constructor(private router: Router) {}

  // Método para redirigir al login
  goToLogin() {
    this.router.navigate(['/']);
  }
}
