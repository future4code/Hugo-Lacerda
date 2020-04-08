let botaoCriar = document.getElementById('enviarTarefa');
let botaoLimpar = document.getElementById('limpar');
let input = document.getElementById('novaTarefa');
let hora = document.getElementById('hora');
let selecionado = document.getElementById('qualDia');
let listaSegunda = document.getElementById('listaSegunda');
let listaTerça = document.getElementById('listaTerça');
let listaQuarta = document.getElementById('listaQuarta');
let listaQuinta = document.getElementById('listaQuinta');
let listaSexta = document.getElementById('listaSexta');
let listaSabado = document.getElementById('listaSabado');
let listaDomingo = document.getElementById('listaDomingo');
console.log(selecionado.value);

function criarElementoLi(){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(hora.value + ' - ' + input.value));
    li.className = 'itemIncompleto';
    li.onclick = function(){
        this.className = 'itemCompleto';
    };
    switch(selecionado.value){
        case 'segunda':
            listaSegunda.appendChild(li);
            input.value = '';
            break;
        case 'terça':
            listaTerça.appendChild(li);
            input.value = '';
            break;
        case 'quarta':
            listaQuarta.appendChild(li);
            input.value = '';
            break;
        case 'quinta':
            listaQuinta.appendChild(li);
            input.value = '';
            break;
        case 'sexta':
            listaSexta.appendChild(li);
            input.value = '';
            break;
        case 'sabado':
            listaSabado.appendChild(li);
            input.value = '';
            break;
        case 'domingo':
            listaDomingo.appendChild(li);
            input.value = '';
            break;
    }
}

function adicionarLiClique(){
    if(input.value !== ''){
        criarElementoLi();
    }
}

function limpar(){
    element = document.getElementsByTagName('li');
    for(let i = element.length - 1; i >= 0; i--){
        element[i].parentNode.removeChild(element[i]);
    }

}

botaoCriar.addEventListener('click', adicionarLiClique);
botaoLimpar.addEventListener('click', limpar);
