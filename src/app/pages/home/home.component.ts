import { Component, OnInit } from '@angular/core';
import {
  ESocialNetwork,
  ISocialNetWorkElement,
} from 'src/app/shared/models/general.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  socialNetworks = ESocialNetwork;
  sNetWorks: ISocialNetWorkElement[] = [
    {
      socialNetWorkName: ESocialNetwork.linkedin,
      socialNetWorkUrl: 'https://www.linkedin.com/in/reffcp/',
      nickname: 'reffcp',
    },
    {
      socialNetWorkName: ESocialNetwork.github,
      socialNetWorkUrl: 'https://github.com/reffcp',
      nickname: '@reffcp',
    },
    {
      socialNetWorkName: ESocialNetwork.instagram,
      socialNetWorkUrl: 'https://www.instagram.com/reffcp/',
      nickname: '@reffcp',
    },
    {
      socialNetWorkName: ESocialNetwork.whatsapp,
      socialNetWorkUrl: 'https://wa.me/523171323794',
      nickname: '*********',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
