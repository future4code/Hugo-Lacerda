let valorCadastro = document.getElementById('valor');
let tipoDespesa = document.getElementById('tipo-despesa');
let descricao = document.getElementById('descricao');
let lista = document.getElementById('lista');
let arrayMestre = new Array();

let tipoFiltro = document.getElementById('tipo');
let valMin = document.getElementById('valor-min');
let valMax = document.getElementById('valor-max');

let extrato = document.getElementById('extrato');
let extratoLi = document.getElementById('extrato-lista');
let valorTotal = document.getElementById('valor-total');
let total = 0;
function adicionarAoArray(){
    if(valorCadastro.value !== '' && tipoDespesa.value !== '' && descricao.value !== ''){
        let obj = {valor: valorCadastro.value,
                   tipo: tipoDespesa.value,
                   descricao: descricao.value}
        arrayMestre.push(obj);

        valorCadastro.value = '';
        tipoDespesa.value = '';
        descricao.value = '';

        adicionarALista(arrayMestre);
        adicionarAoExtrato(arrayMestre);
    }else{
        alert('Preencha todos os campos, por gentileza.')
    }
}

function adicionarALista(array){
    lista.innerText = '';
    for(obj of array){
        let li = document.createElement('li');
        li.innerText = `Valor: R$${obj.valor}.00 | Tipo: ${obj.tipo} | Descrição: ${obj.descricao}`;
        lista.appendChild(li);
    }
}

function adicionarAoExtrato(array){
    extratoLi.innerText = '';
    valorTotal.innerText = '';
    total = 0;
    for(obj of array){
        let li = document.createElement('li');
        li.innerText = `Valor: R$${obj.valor}.00 | Tipo: ${obj.tipo}`;
        extratoLi.appendChild(li);
        total+= Number(obj.valor);
    }

    valorTotal.innerText = `Valor total: R$${total}.00`;

}



function filtrado(){
const filtro = arrayMestre.filter((obj, i, array) => {
            
    if(Number(obj.valor) >= Number(valMin.value) && Number(obj.valor) <= Number(valMax.value) && obj.tipo === tipoFiltro.value){
        return true;
    }

    return false;

});

adicionarALista(filtro);

};


function limparFiltros(){
    valMax.value = '';
    valMin.value = '';
    tipoFiltro.value = '';

    adicionarALista(arrayMestre);

}