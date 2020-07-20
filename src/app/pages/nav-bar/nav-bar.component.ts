import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    
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
