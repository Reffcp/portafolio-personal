import { Component, Input, OnInit } from '@angular/core';
import { ESocialNetwork } from '../../models/general.model';

@Component({
  selector: 'app-social-stick',
  templateUrl: './social-stick.component.html',
  styleUrls: ['./social-stick.component.scss'],
})
export class SocialStickComponent implements OnInit {
  @Input() socialNetWorkName?: ESocialNetwork;
  @Input() socialNetWorkUrl: string = 'none';
  @Input() nickname: string = 'none';

  socialIcon = this.getIcon(ESocialNetwork.facebook);

  constructor() {}

  ngOnInit(): void {
    this.socialIcon = this.getIcon(
      this.socialNetWorkName ? this.socialNetWorkName : ESocialNetwork.facebook
    );
  }

  getIcon(socialNetwork: ESocialNetwork) {
    switch (socialNetwork) {
      case ESocialNetwork.facebook:
        return 'bi bi-facebook';
      case ESocialNetwork.twitter:
        return 'bi bi-twitter';
      case ESocialNetwork.instagram:
        return 'bi bi-instagram';
      case ESocialNetwork.youtube:
        return 'bi bi-youtube';
      case ESocialNetwork.linkedin:
        return 'bi bi-linkedin';
      case ESocialNetwork.torre:
        return 'bi bi-torre';
      case ESocialNetwork.github:
        return 'bi bi-github';
      case ESocialNetwork.gitlab:
        return 'bi bi-gitlab';
      case ESocialNetwork.whatsapp:
        return 'bi bi-whatsapp';
      default:
        return 'bi bi-facebook';
    }
  }
}
