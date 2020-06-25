import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"


// a. Pode ocorrer um erro, mesmo que o typescript não o indique.
// b. Fazemos isso pelo motivo indicado acima, para garantirmos o retorno no formato indicado pela função.
// c.

type subs = {
    id: string;
    name: string;
    email: string;
}

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
    const allSubs: any[] = await getSubscribers()

    console.log(allSubs);
}

main()
