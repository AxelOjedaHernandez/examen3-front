import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  logout(): void {
    // Eliminar el token de localStorage o sessionStorage
    localStorage.removeItem('token');
    // O si usas sessionStorage:
    // sessionStorage.removeItem('token');

    // Redirigir al login
    this.router.navigate(['/login']);
  }

  saveUserData(username: string, token: string): void {
    localStorage.setItem('username', username); // Guardar el username
    localStorage.setItem('token', token);       // Guardar el token
  }

  getUsername(): string | null {
    return localStorage.getItem('username'); // Recuperar el username
  }
}
