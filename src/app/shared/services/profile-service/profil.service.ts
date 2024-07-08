import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private URL = environment.api_AulaVirtual;

  constructor(
    private http: HttpClient
  ) { }

  getRol(): Observable<string> {
    return this.http.get(`${this.URL}/curso/${localStorage.getItem('email')}/rol`, { responseType: 'text' }).pipe(
      tap((response: any) => {
        console.log('Respuesta completa de la API-Rol: ', response);
        return response;
      }), catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      })
    );
  }

  getNombre(): Observable<string> {
    return this.http.get(`${this.URL}/curso/${localStorage.getItem('email')}/nombre`, { responseType: 'text' }).pipe(
      tap((response: any) => {
        console.log('Respuesta completa de la API-Nombre: ', response);
        return response;
      }), catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      })
    );
  }
}
