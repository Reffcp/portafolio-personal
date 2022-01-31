import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: () => import('./views/inicio/inicio.module').then( (m) => m.InicioModule),
      },
      {
        path: 'sobre-mi',
        loadChildren: () => import('./views/sobre-mi/sobre-mi.module').then( (m) => m.SobreMiModule),
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
