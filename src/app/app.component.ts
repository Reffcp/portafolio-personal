import { Component } from '@angular/core';

<<<<<<< HEAD
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router ) {}
  ancla(id){
    document.getElementById(id).click();
  }

  gotoUrl(url){
    window.open(url, '_blank');
  }
=======
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-personal';
>>>>>>> 32caa8ed5f9c4704b95ea9c87df60f6aef20ca29
}
