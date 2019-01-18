import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://reqres.in/api';

  constructor(private _http: HttpClient) {

  }

  getUsuarios() {
    return this._http.get(`${this.url}/users?per_page=6`)
      .pipe(
        map(resp => {
          return resp['data'];
        })
      );
  }
}
