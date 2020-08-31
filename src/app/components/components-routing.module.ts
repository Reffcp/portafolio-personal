import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { InicioComponent } from './inicio/inicio.component';


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
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
