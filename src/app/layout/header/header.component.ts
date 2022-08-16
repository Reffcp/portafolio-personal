import { Component, OnInit } from '@angular/core';
import { IMenuElement } from 'src/app/shared/models/menu-element.model';

// menu: IMenuElement[] = [
//   {
//     name: 'Acerca',
//     link: '/me',
//   },
//   {
//     name: 'Experiencia Laboral',
//     link: '/experience/jobs',
//   },
//   {
//     name: 'Experiencia Academica',
//     link: '/experience/study',
//   },
//   {
//     name: 'Experiencia en Asesorias',
//     link: '/experience/consulting',
//   },
//   {
//     name: 'Proyectos Publicos',
//     link: '/projects/public',
//   },
//   {
//     name: 'Proyectos Privados',
//     link: '/projects/private',
//   },
//   {
//     name: 'Contacto',
//     link: '/contact',
//   },
// ];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: IMenuElement[] = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Experiencia Laboral',
      link: '/experience',
    },
    {
      name: 'Experiencia Academica',
      link: '/experience',
    },
    {
      name: 'Proyectos',
      link: '/projects',
    },
    {
      name: 'Contacto',
      link: '/contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
