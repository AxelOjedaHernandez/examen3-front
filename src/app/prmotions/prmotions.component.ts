import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { PromotionService } from '../service/promotion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PromotionForm } from '../data/promotionForm';

@Component({
  selector: 'app-prmotions',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './prmotions.component.html',
  styleUrl: './prmotions.component.css'
})
export class PrmotionsComponent {
  promotionService = inject(PromotionService);
  listadoPromotions: any[] = []
  selectedPromotion: any = {};


  // Propiedad para el formulario
  newPromotion = {
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  constructor(){
    this.cargarPromotions()
  }

  cargarPromotions() {
    this.promotionService.getAllPromotions().subscribe(
      (data) => {
        console.log(data); // Verifica los datos que llegan
        this.listadoPromotions = data.promotions;
      },
      (error) => {
        console.error(error); // Verifica si hay algún error
      }
    );
  }  

  EliminarPromotion(id: number){
    this.promotionService.deletePromotion(id).subscribe((data)=>{
      if(data.estado == 1){
        this.cargarPromotions()
      }else{
        alert(data.msg)
      }
    })
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  guardarPromotion() {
    // Verifica si los campos están completos
    if (
      this.newPromotion.name.trim() === '' ||
      this.newPromotion.description.trim() === '' ||
      this.newPromotion.startDate.trim() === '' ||
      this.newPromotion.endDate.trim() === ''
    ) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }
  
    // Llama al servicio para guardar la promoción
    this.promotionService.postPromotion(this.newPromotion).subscribe(
      (response) => {
        alert('Promoción agregada exitosamente.');
        this.cargarPromotions(); // Recarga la lista de promociones
        this.resetForm(); // Limpia el formulario
        const modal = document.getElementById('agregarModal');
        if (modal) {
          (modal as HTMLElement).click(); // Cierra el modal
        }
      },
      (error) => {
        console.error('Error al guardar la promoción:', error);
        alert('Hubo un error al guardar la promoción.');
      }
    );
  }     

  // Método para limpiar el formulario
  resetForm() {
    this.newPromotion = { name: '', description: '', startDate: '', endDate: '' };
  }
  
  seleccionarPromotion(promotion: any) {
    this.selectedPromotion = { ...promotion }; // Clonar el objeto para evitar cambios no deseados
  }
  
  actualizarPromotion() {
    // Verifica si los campos están completos
    if (
      this.selectedPromotion.name.trim() === '' ||
      this.selectedPromotion.description.trim() === '' ||
      this.selectedPromotion.startDate.trim() === '' ||
      this.selectedPromotion.endDate.trim() === ''
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Llama al servicio para actualizar la promoción
    this.promotionService.putPromotion(this.selectedPromotion.id, this.selectedPromotion).subscribe(
      (response) => {
        alert('Promoción actualizada exitosamente.');
        this.cargarPromotions(); // Recarga la lista de promociones
        const modal = document.getElementById('actualizarModal');
        if (modal) {
          (modal as HTMLElement).click(); // Cierra el modal
        }
      },
      (error) => {
        console.error('Error al actualizar la promoción:', error);
        alert('Hubo un error al actualizar la promoción.');
      }
    );
  }
   
  
}
