import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 
=======
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/inicio',
        pathMatch:'full'
      },
      {
        path:'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path:'proyectos',
        loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
      },
      {
        path:'sobre-mi',
        loadChildren: () => import('./sobre-mi/sobre-mi.module').then(m => m.SobreMiModule)
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 32caa8ed5f9c4704b95ea9c87df60f6aef20ca29
