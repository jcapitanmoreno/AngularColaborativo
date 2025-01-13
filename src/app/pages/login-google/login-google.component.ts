import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NotificationComponent } from '../../components/notification/notification.component';
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-login-google',
  standalone: true,
  imports: [CommonModule, NotificationComponent, NgOptimizedImage],
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  // Iniciar sesión con Google
  loginWithGoogle(): void {
    this.authService.loginWithGoogle().catch((error) => {
      this.errorMessage = error.message;
    });
  }

  protected readonly user = user;
}
