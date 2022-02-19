import { IProyecto } from './../../core/models/proyecto.model';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/core/services/proyectos/proyectos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  public proyectos: IProyecto[] = [];
  constructor(
    private projectService: ProyectosService,
    private actRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    // this.actRoute.params.subscribe((params) => {
    //   const tipoProyectos = params['tipoProyectos'];
    //   this.obtenerProyectos(tipoProyectos);
    // });
  }

  obtenerProyectos(tipoProyectos: string) {
    switch (tipoProyectos) {
      case 'formal':
        this.getProyectosFormal();
        break;
    }
  }

  getProyectosFormal() {
    this.projectService
      .getProjects('freelancer')
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