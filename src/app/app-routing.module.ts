import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajeComponent} from './personaje/personaje.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personaje', component: PersonajeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'personaje' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
