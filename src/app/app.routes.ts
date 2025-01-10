import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrmotionsComponent } from './prmotions/prmotions.component';
import { CreditsComponent } from './credits/credits.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'promociones', component: PrmotionsComponent },
  { path: 'creditos', component: CreditsComponent }
];
