import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string | null = '';

  constructor(private authService: AuthService, private router: Router) {
    this.userName = this.authService.getUsername(); // Obtener el username del localStorage
  }

  // Método para cerrar sesión
  logout(): void {
    this.authService.logout(); // Cerrar sesión
  }
}
