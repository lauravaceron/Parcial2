import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Conferencia } from './conferencia';
import { ConferenciaDetail } from './conferencia-detail';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getConferencias(): Observable<ConferenciaDetail[]> {
    return this.http.get<ConferenciaDetail[]>(this.apiUrl);
  }
}
