import Place from './Place';

export default class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getResidentsQtty = (): number => {
        return this.residentsQuantity;
    }
  }