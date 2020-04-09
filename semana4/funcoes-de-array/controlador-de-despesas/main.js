let valorCadastro = document.getElementById('valor');
let tipoDespesa = document.getElementById('tipo-despesa');
let descricao = document.getElementById('descricao');
let lista = document.getElementById('lista');
let arrayMestre = new Array();

let tipoFiltro = document.getElementById('tipo');
let valMin = document.getElementById('valor-min');
let valMax = document.getElementById('valor-max');

function adicionarAoArray(){
    if(valorCadastro.value !== '' && tipoDespesa.value !== '' && descricao.value !== ''){
        let obj = {valor: valorCadastro.value,
                   tipo: tipoDespesa.value,
                   descricao: descricao.value}
        arrayMestre.push(obj);

        valorCadastro.value = '';
        tipoDespesa.value = '';
        descricao.value = '';

        adicionarALista(arrayMestre)
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



function filtrado(){
const filtro = arrayMestre.filter((obj, i, array) => {
            
    if(obj.valor >= valMin.value && obj.valor <= valMax.value && obj.tipo === tipoFiltro.value){
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