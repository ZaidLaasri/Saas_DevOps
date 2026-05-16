import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientApp } from '../models/client-app.model';
import { CreateClientAppRequest } from '../models/create-client-app-request.model';

@Injectable({
  providedIn: 'root'
})
export class ClientAppService {
  private readonly apiUrl = 'http://localhost:8080/api/client-apps';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<ClientApp[]> {
    return this.http.get<ClientApp[]>(this.apiUrl);
  }

  getById(id: number): Observable<ClientApp> {
    return this.http.get<ClientApp>(`${this.apiUrl}/${id}`);
  }

  create(request: CreateClientAppRequest): Observable<ClientApp> {
    return this.http.post<ClientApp>(this.apiUrl, request);
  }
}
