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
    return this.httpClient.get(`${this.URL}/curso/${id}/foto`,{responseType: 'blob'});
  }

  getCursosAll(): Observable<any[]> {
    return this.httpClient.get(`${this.URL}/curso/listar/dto`).pipe(
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

}



