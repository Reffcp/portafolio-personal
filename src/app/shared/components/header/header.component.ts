import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirMenu(){
    var menu =document.querySelector('.menu')
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active')
    } else {
      menu.classList.add('is-active')
    }
  
  }

}
