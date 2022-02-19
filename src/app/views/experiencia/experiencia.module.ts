import { ExperienciaRoutingModule } from './experiencia-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia.component';

@NgModule({
  declarations: [ExperienciaComponent],
  imports: [CommonModule, ExperienciaRoutingModule],
})
export class ExperienciaModule {}
