import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public date = new Date().getFullYear();
  constructor() { }

  public ngOnInit(): void {
  }

  public gotoUrl(url) {
    window.open(url, '_Blank');
  }

}
