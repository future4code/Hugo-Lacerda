import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"


// a. O endpoint /subscribers/all.
// b. Com a sintaxe Promise<any[]>.
// c.

async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data    
}

async function main(){
    const allSubs: any[] = await getSubscribers()

    console.log(allSubs);
}

main()
