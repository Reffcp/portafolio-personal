import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/core/services/proyectos/proyectos.service';
import { IProyecto } from '../../../core/models/Proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  public proyectos: IProyecto[] = [
    {
        id: '',
        name: '',
        description: '',
        img: '',
        demolink: '',
        githubrepo: '',
        techlonogy: '',
    }];
  constructor(private projectService: ProyectosService) { }

  public ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe((res: IProyecto[]) => {
      this.proyectos = res;
    });
  }

  public ancla(id) {
    document.getElementById(id).click();
  }

  public gotoUrl(url) {
    window.open(url, '_blank');
  }

}
