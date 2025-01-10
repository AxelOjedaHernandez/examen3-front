import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';
  private password: string | null = null;  // Almacena temporalmente el password en memoria

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    this.password = password;
    localStorage.setItem('username', username); 
    sessionStorage.setItem('password', password); // Guardar el password temporalmente
    return this.http.post(this.apiUrl, { username, password });
  }
  
  getPassword(): string | null {
    return sessionStorage.getItem('password');  // Obtener el password desde sessionStorage
  }
  
  clearPassword(): void {
    sessionStorage.removeItem('password');  // Limpiar el password después del logout
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
  }

  getUsername(): string | null {
    return localStorage.getItem('username'); // Recuperar el username
  }
}
