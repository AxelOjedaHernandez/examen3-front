import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotions } from '../data/promotions-entity';
import { Promotion } from '../data/promotion-entity';
import { PromotionForm } from '../data/promotionForm';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  urlAPI = "https://examen3-back.onrender.com/api/v1/promotion";
  
  constructor(private httpCliente: HttpClient, private authService: AuthService) { }

  // Método para obtener las cabeceras con autorización
  private getAuthHeaders(): HttpHeaders {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();
  
    if (username && password) {
      const encodedCredentials = btoa(`${username}:${password}`);
      return new HttpHeaders({ 'Authorization': `Basic ${encodedCredentials}` });
    } else {
      alert("Por favor inicia sesión");
      throw new Error('No se encontraron credenciales de autenticación');
    }
  }  

  getAllPromotions(): Observable<Promotions> {
    return this.httpCliente.get<Promotions>(`${this.urlAPI}/listar`, {
      headers: this.getAuthHeaders()
    });
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.httpCliente.get<Promotion>(`${this.urlAPI}/listar/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  postPromotion(promotion: PromotionForm): Observable<Promotion> {
    return this.httpCliente.post<Promotion>(`${this.urlAPI}/crear`, promotion, {
      headers: this.getAuthHeaders()
    });
  }  

  putPromotion(id: number, promotion: PromotionForm): Observable<Promotion> {
    return this.httpCliente.put<Promotion>(`${this.urlAPI}/actualizar/${id}`, promotion, {
      headers: this.getAuthHeaders()
    });
  }

  deletePromotion(id: number): Observable<Promotion> {
    return this.httpCliente.delete<Promotion>(`${this.urlAPI}/eliminar/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
