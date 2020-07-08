import Place from './Place';

export default class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQtty = (): number => {
        return this.machinesQuantity;
    }
  }