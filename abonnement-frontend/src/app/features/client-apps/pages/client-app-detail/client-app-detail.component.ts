import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ClientApp } from '../../models/client-app.model';
import { ClientAppService } from '../../services/client-app.service';

@Component({
  selector: 'app-client-app-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './client-app-detail.component.html',
  styleUrl: './client-app-detail.component.scss'
})
export class ClientAppDetailComponent implements OnInit {
  clientApp?: ClientApp;
  loading = false;
  errorMessage = '';
  copySuccess = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly clientAppService: ClientAppService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'Identifiant application invalide.';
      return;
    }

    this.loadClientApp(id);
  }

  loadClientApp(id: number): void {
    this.loading = true;
    this.errorMessage = '';

    this.clientAppService.getById(id).subscribe({
      next: (data) => {
        this.clientApp = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les détails de l’application.';
        this.loading = false;
      }
    });
  }

  copyApiKey(): void {
    if (!this.clientApp?.apiKey) {
      return;
    }

    navigator.clipboard.writeText(this.clientApp.apiKey).then(() => {
      this.copySuccess = true;

      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    });
  }
}
