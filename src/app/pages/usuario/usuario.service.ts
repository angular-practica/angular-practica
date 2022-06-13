import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, DataUsuario } from './usuario';

const { endpoint } = environment;

@Injectable()
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${endpoint}/app`);
    // return this.http.get<DataUsuario>(`${endpoint}/app`).pipe(pluck('data'));
  }

  get(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${endpoint}/app/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${endpoint}/app`, usuario);
  }

  update = (id: string, usuario: Usuario): Observable<Usuario> => this.http.put<Usuario>(`${endpoint}/app/${id}`, usuario);

  delete = (id: string): Observable<Usuario> => this.http.delete<Usuario>(`${endpoint}/app/${id}`);

}
