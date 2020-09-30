import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ancla(id){
    document.getElementById(id).click();
  }

  gotoUrl(url){
    window.open(url, '_blank');
  }

}
