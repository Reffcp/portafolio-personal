export interface IExperienceModel {
  DES_DESCRIPCION_CORTA: string;
  DES_DESCRIPCION_LARGA: string;
  DES_NOMBRE_EMPRESA: string;
  DES_TIPO_EMPLEO: string;
  DES_TIPO_EXPERIENCIA: string;
  DES_UBICACION: string;
  DES_URL_PORTADA: string;
  FECHA_FIN: any;
  FECHA_INICIO: any;
  JSON_TECNOLOGIAS: IExpTechnologiesModel[];
  BND_TRABAJO_ACTUAL: boolean;
}

interface IExpTechnologiesModel {
  DES_NOMBRE: string;
  DES_URL_LOGO: string;
  DES_URL_TECNOLOGIA: string;
}
