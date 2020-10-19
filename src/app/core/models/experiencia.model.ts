export interface IExperiencia {
    DES_NOMBRE_EMPRESA: string;
    DES_IMG: string;
    DES_LUGAR_EMPRESA: string;
    DES_NOMBRE_PUESTO: string;
    FECHA_INICIO: string;
    FECHA_FIN: string;
    DES_PUESTO: string;
    TECNOLOGIAS: ITecnologias[];
}

interface ITecnologias {
  DES_NOMBRE: string;
}
