import { IProyecto } from './../../core/models/proyecto.model';
import { Component, Input, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/core/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  @Input() tipoProyectos: string = '';

  public proyectos: IProyecto[] = [];
  constructor(private projectService: ProyectosService) {}

  public ngOnInit(): void {
    this.projectService
      .getProjects(this.tipoProyectos)
      .subscribe((res: IProyecto[]) => {
        this.proyectos = res;
        this.proyectos.reverse();
      });
  }

  public ancla(id) {
    document.getElementById(id).click();
  }

  public gotoUrl(url) {
    window.open(url, '_blank');
  }
}
