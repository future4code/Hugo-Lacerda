import * as fs from 'fs';
import * as moment from 'moment';

moment.locale('pt-br')

const arquivoDestino: string = 'contas.json';

type transacao = {
    valor: number;
    data: number;
    descricao: string;
}

type conta = {
    nome: string;
    cpf: number;
    dataNasc: number;
    saldo: number;
    extrato: transacao[];
}

const pegarContas = (): conta[] =>{
    const bufferArquivo: Buffer = fs.readFileSync(arquivoDestino);
    const textoArquivo: string = bufferArquivo.toString();
    const contas: conta[] = JSON.parse(textoArquivo);

    return contas;
}

const criarConta = (nome: string, cpf: number, dataNasc: number): void =>{

    const dataAtual = moment();
    const dataFim = moment(dataNasc);

    const difAnos = dataAtual.diff(dataFim, "years")

    if(difAnos < 18){
        console.log('Criação de conta cancelada: é preciso ter ao menos 18 anos de idade para ser titular de uma conta.')

        return;
    }

    const novaConta: conta = {
        nome,
        cpf,
        dataNasc,
        saldo: 0,
        extrato: []
    }

    const contas: conta[] = pegarContas();

    contas.push(novaConta);

    const contasAtualizadas: string = JSON.stringify(contas, null, 2);

    console.log(contasAtualizadas);

    fs.writeFileSync(arquivoDestino, contasAtualizadas);
    
    console.log('Conta criada com sucesso!')
}

const nome: string = process.argv[2]
const cpf: number = Number(process.argv[3])
const dataNasc: number = Number(process.argv[4])

criarConta(nome, cpf, dataNasc)