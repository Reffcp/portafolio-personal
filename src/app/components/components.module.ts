import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './layout/header/header.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [ComponentsComponent, HeaderComponent, FooterComponent, InicioComponent, ProyectosComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
