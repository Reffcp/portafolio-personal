import { Component } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { link } from 'fs';
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
}
