import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotions } from '../data/promotions-entity';
import { Promotion } from '../data/promotion-entity';
import { PromotionForm } from '../data/promotionForm';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  urlAPI = "http://localhost:8080/api/v1/promotion";

  // Obtener el nombre de usuario desde el localStorage
  private username = localStorage.getItem('username');

  // Nombre de usuario y contraseña codificados para el ejemplo (cambia para obtenerlos dinámicamente)
  private password = '1234'; 
  
  //inyectamos el cliente http para conectarnos
  constructor(private httpCliente: HttpClient) { }

  // Método para obtener las cabeceras con autorización
  private getAuthHeaders(): HttpHeaders {
    const encodedCredentials = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`
    });
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
