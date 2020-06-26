import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a. Promise.all permite que o computador trate de várias promises paralelamente, ao contrário do padrão, no qual é necessário realizar uma promise antes de passar para a próxima. 
// b. As notificações serão enviadas ao mesmo tempo e haverá economia de tempo, pois não será preciso esperar uma ser enviada para enviar a próxima. 
// c.

type subs = {
    id: string;
    name: string;
    email: string;
}

const notify = async (
    subs: subs[],
    message: string
  ): Promise<void> => {
    const notificationArray: Promise<any>[] = [];
    for (const sub of subs) {
      notificationArray.push(axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: sub.id,
        message: message,
      }));
    }
    
    await Promise.all(notificationArray)
    console.log("All notifications sent");
  };


  const getSubscribers = async(): Promise<subs[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res: any) => {
        return({
            id: res.id,
            name: res.name,
            email: res.email
        })
    })    
}

const main = async(): Promise<void> =>{
    const allSubs: subs[] = await getSubscribers()

    await notify(allSubs, "Se ligue na notícia quente");
}

main()