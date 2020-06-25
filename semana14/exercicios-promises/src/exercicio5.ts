import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a. Ocorrem erros pela ordem de execução. Não é recomendável usar métodos de array para lidar com  assincronicidade pois não formam feitos pensados nisso.
// b. 

type subs = {
    id: string;
    name: string;
    email: string;
}

const notify = async (
    subs: subs[],
    message: string
  ): Promise<void> => {
    for (const sub of subs) {
      await axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: sub.id,
        message: message,
      });
    }
  
    console.log("All notifications sent");
  };

  const getSubscribers = async(): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data    
}

const main = async(): Promise<void> =>{
    const allSubs: subs[] = await getSubscribers()

    await notify(allSubs, "Se ligue na notícia quente");
}

main()