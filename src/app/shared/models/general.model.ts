export enum ESocialNetwork {
  facebook = 'Facebook',
  twitter = 'Twitter',
  instagram = 'Instagram',
  youtube = 'Youtube',
  linkedin = 'LinkedIn',
  torre = 'Torre',
  github = 'GitHub',
  gitlab = 'GitLab',
  whatsapp = 'WhatsApp',
}

export interface ISocialNetWorkElement {
  socialNetWorkName: ESocialNetwork;
  socialNetWorkUrl: string;
  nickname: string;
}
