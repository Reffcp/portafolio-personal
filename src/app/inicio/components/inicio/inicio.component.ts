import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public ancla(id) {
    document.getElementById(id).click();
  }

  public gotoUrl(url) {
    window.open(url, '_blank');
  }

}
