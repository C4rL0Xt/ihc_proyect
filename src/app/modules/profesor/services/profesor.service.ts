import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private readonly URL = environment.api_AulaVirtual;

  constructor(
    private http: HttpClient
  ) { }

  getMyCourse(): Observable<any[]> {
    return this.http.get(`${this.URL}/curso/profesor/${localStorage.getItem('email')}`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API mis cursos para un profesor: ", response);
        return response;
      }),
      catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      })
    );
  }
}
