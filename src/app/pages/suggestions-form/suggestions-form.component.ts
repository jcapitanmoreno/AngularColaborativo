import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import { EmailService } from "../../services/email.service";
import {ChampionSectionFormComponent} from "../../champion-section-form/champion-section-form.component";

@Component({
    selector: 'app-suggestions-form',
    standalone: true,
    templateUrl: './suggestions-form.component.html',
    styleUrls: ['./suggestions-form.component.css'],
  imports: [ReactiveFormsModule, NgIf, ChampionSectionFormComponent]
})
export class SuggestionsFormComponent {
    suggestionForm: FormGroup;

    constructor(private fb: FormBuilder, private emailService: EmailService) {
        this.suggestionForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.suggestionForm.valid) {
            const {email, subject, message} = this.suggestionForm.value;
            this.emailService.sendEmail(email, subject, message)
                .then(() => {
                    alert('Gracias por tu sugerencia. El correo ha sido enviado.');
                    this.suggestionForm.reset();
                })
                .catch(() => {
                    alert('Hubo un error al enviar el correo. Intenta nuevamente.');
                });
        } else {
            alert('Por favor, completa todos los campos.');
        }
    }
}
