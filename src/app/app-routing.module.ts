import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'inicio',  component: AppComponent },
  { path: '',redirectTo:'/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 