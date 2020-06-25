import axios from 'axios'
import { Console } from 'console';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// a. Função utiliza o método put, pois estamos adicionando algo a api. 
// b. 

const newsGen = async(title: string, content: string, date: number): Promise<void> =>{
    await axios.put(`${baseUrl}/news`, {
        title,
        content,
        date,        
    })
}

const main = async(): Promise<void> =>{
    await newsGen('Finalmente descobrimos o nome do irmão do Jorel', "Você não vai acreditar.", 1687722205)

    const news = await axios.get(`${baseUrl}/news/all`)

    console.log(news);
}

main()
