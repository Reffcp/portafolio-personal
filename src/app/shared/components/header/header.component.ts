import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  public abrirMenu() {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menu.classList.add('is-inactive');
    } else {
      menu.classList.add('is-active');
      menu.classList.remove('is-inactive');
    }
  }
}
