import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ClientAppService } from '../../services/client-app.service';
import { CreateClientAppRequest } from '../../models/create-client-app-request.model';

@Component({
  selector: 'app-client-app-create',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './client-app-create.component.html',
  styleUrl: './client-app-create.component.scss'
})
export class ClientAppCreateComponent {
  loading = false;
  errorMessage = '';

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    contactEmail: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly clientAppService: ClientAppService,
    private readonly router: Router
  ) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const request: CreateClientAppRequest = {
      name: this.form.value.name!,
      contactEmail: this.form.value.contactEmail!
    };

    this.clientAppService.create(request).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/client-apps']);
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Impossible de créer l’application cliente.';
      }
    });
  }
}
