import { Injectable } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ObservedValueOf, catchError, map, of, tap } from 'rxjs';
import { Semana } from 'src/app/core/models/semanas.model';


@Injectable({
  providedIn: 'root'
})
export class CursoSService {

  private readonly URL = environment.api_AulaVirtual;


  constructor(private httpClient: HttpClient) { }

  getFotoProfesor(id: number): Observable<any> {
    return this.httpClient.get(`${this.URL}/curso/${id}/foto`, { responseType: 'blob' });
  }

  getMateriales(): Observable<any[]> {
    return this.httpClient.get(`${this.URL}/curso/listaMaterialesE`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API: ", response);
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

  getMyCourses(): Observable<any[]> {
    return this.httpClient.get(`${this.URL}/curso/${localStorage.getItem('email')}/cursos`).pipe(
      map((response: any) => {
        console.log("Respuesta completa de la API mis cursos para un estudiante: ", response);
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
    return this.httpClient.get(`${this.URL}/curso/semanas/${curso.nombre_curso}`).pipe(
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

  createSemana(semana: Semana): Observable<any> {
    return this.httpClient.post(`${this.URL}/curso/guardar-semana`, semana);
  }

  getLastCodeSemana$(): Observable<number> {
    return this.httpClient.get<number>(`${this.URL}/curso/lastCodeSem`).pipe(
      catchError(err => {
        console.error('Error al obtener el último código de semana:', err);
        alert('Error de conexión');
        return of(-1); // Devuelve un valor por defecto en caso de error
      })
    );
  }

}



