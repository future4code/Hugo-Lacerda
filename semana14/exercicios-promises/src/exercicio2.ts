import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"


// a. Uma função nomeada assincrona apresenta o async antes da declaração da função, enquanto a arrow function assíncrona apresenta o async após o primeiro sinal de atribuição '='.
// b.

const getSubscribers = async(): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data    
}

const main = async(): Promise<void> =>{
    const allSubs: any[] = await getSubscribers()

    console.log(allSubs);
}

main()
