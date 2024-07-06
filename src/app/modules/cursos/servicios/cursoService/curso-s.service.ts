import { Injectable } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoSService {

  private readonly URL = environment.api_AulaVirtual;

  constructor(private httpClient: HttpClient) { }

  getFotoProfesor(id: number): Observable<any> {
    return this.httpClient.get(`${this.URL}/curso/${id}/foto`, { responseType: 'blob' });
  }

  getCursosAll(): Observable<any[]> {
    return this.httpClient.get(`${this.URL}/curso/listar/dto`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API todos cursos: ", response);
        return response;
      }),
      catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      })
    )
  }

  getSemanasCurso(curso: Curso): Observable<any> {
    console.log('Entraindnig Curso:', curso);
    return this.httpClient.get(`${this.URL}/curso/semanas/${curso.nombrecurso}`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API - semanas: ", response);
        return response;
      }),
      catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of([]);
      }));
  }

  getCursoByNombre(nombreCurso: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/curso/buscar/${nombreCurso}`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API - nombres de curso: ", response);
        return response;
      }),
      catchError((err) => {
        alert('Error de conexion');
        const { status, statusText } = err;
        console.log('Algo paso revisar', [status, statusText]);
        return of(null);
      })
    )
  }

}



