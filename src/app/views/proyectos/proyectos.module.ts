import { NgModule } from '@angular/core';

import { ProyectosComponent } from './proyectos.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProyectosComponent],
  imports: [CommonModule, ProyectosRoutingModule],
})
export class ProyectosModule {}
