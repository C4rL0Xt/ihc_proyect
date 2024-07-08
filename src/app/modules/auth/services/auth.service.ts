import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email: string | undefined;
  private loginUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  login(correo: string, password: string): Observable<any> {
    return this.http.post(`${this.loginUrl}/login`, { correo, password });
  }

  getToken() {
    return localStorage.getItem('token');

  }

  getEmailFromToken(tok: string): void {

    if (tok) {
      const token = tok;
      const payload = token?.split('.')[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);
      this.email = values.email;

    }
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
