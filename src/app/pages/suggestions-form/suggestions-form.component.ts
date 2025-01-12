import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-suggestions-form',
  standalone: true,
  templateUrl: './suggestions-form.component.html',
  styleUrls: ['./suggestions-form.component.css'],
  imports: [ReactiveFormsModule, NgIf]
})
export class SuggestionsFormComponent {
  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.suggestionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.suggestionForm.valid) {
      console.log('Formulario enviado:', this.suggestionForm.value);
      alert('Gracias por tu sugerencia');
      this.suggestionForm.reset();
    }
  }
}
