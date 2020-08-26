import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Personaje } from 'src/app/shared/models/personaje';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getPersonajes(url): Observable<Personaje[]> {
    return this.http.get<any>(this.url + url).pipe(
      map((elemento) => {
        return elemento.results;
      })
    );
  }
}
