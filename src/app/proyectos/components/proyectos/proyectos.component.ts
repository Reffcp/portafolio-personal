import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/core/services/proyectos/proyectos.service';
import { Proyecto } from '../../../core/interfaces/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[]=[
    {
        id:"",
        name:"",
        description:"",
        img:"",
        demolink:"",
        githubrepo:"",
        techlonogy:""
    }];
  constructor(private projectService:ProyectosService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe((res:Proyecto[]) => {
      this.proyectos=res;
    })
  }

  ancla(id){
    document.getElementById(id).click();
  }

  gotoUrl(url){
    window.open(url, '_blank');
  }

}
