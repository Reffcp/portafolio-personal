import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    InicioComponent,
    ExperienciaComponent,
    ProyectosComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
  ],
})
export class InicioModule { }
