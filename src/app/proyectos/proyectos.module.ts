import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    ProyectosComponent,
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
  ],
})
export class ProyectosModule { }