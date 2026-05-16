import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ClientApp } from '../../models/client-app.model';
import { ClientAppService } from '../../services/client-app.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-client-app-list',
  standalone: true,
  imports: [
    NgIf,
    MatTableModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './client-app-list.component.html',
  styleUrl: './client-app-list.component.scss'
})
export class ClientAppListComponent implements OnInit {
  clientApps: ClientApp[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'contactEmail',
    'apiKey',
    'status',
    'actions'
  ];

  loading = false;
  errorMessage = '';

  constructor(private readonly clientAppService: ClientAppService) {}

  ngOnInit(): void {
    this.loadClientApps();
  }

  loadClientApps(): void {
    this.loading = true;
    this.errorMessage = '';

    this.clientAppService.getAll().subscribe({
      next: (data) => {
        this.clientApps = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les applications clientes.';
        this.loading = false;
      }
    });
  }
}
