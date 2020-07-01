import Client from "./Client";

export default class ClientManager {
  private clients: Client[] = [];

  public getClientsQuantity = (): number => {
    return this.clients.length;
  };

  public registerClient = (client: Client): void => {
    this.clients.push(client);
  };

  public calculateBillOfClient = (registrationNumber: number): number => {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if (foundClient) {
      return foundClient.calculateBill();
    }

    return 0;
  };
  public calculateTotalIncome = (): number => {
    let totalIncome: number = 0;
    this.clients.forEach((client) => {
      totalIncome += client.calculateBill();
    });
    return totalIncome;
  }

  public deleteUser = (registrationNumber: number): void => {
    let regsIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        regsIndex = i;
      }
    }

    if (regsIndex !== undefined) {
      this.clients.splice(regsIndex, 1);
    }
  }
}
