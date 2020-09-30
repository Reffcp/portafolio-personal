import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';


const routes: Routes = [
  {
    path: '',
    component: SobreMiComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SobreMiRoutingModule { }
