import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


const routes: Routes = [
  {
    path:'',
    component: ComponentsComponent,
    children: [
      {
        path:'',
        redirectTo:'inicio'
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
