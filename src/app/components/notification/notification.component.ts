import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input() alertClass: String = "";
  @Input() alertMessage: String = "";

}
