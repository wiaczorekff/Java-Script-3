import {produtos} from "./produtos.js";
//criamos nossas tags html
const div = document.createElement('div');/*objeto que interage com o html */
const paragrafo = document.createElement('p')


//inserimos nossas tags no html
div.appendChild(paragrafo);
document.body.appendChild(div);
div.classList.add ('minhaClasse');

//forma moderna de fazer função
//
const exibirProdutos = () => {
    //função callback
    produtos.forEach((item)=> {
        paragrafo.innerHTML += 'produto: ' + item.name + '<br>'
        paragrafo.innerHTML += 'descrição: ' + item.description + '<br>'
        paragrafo.innerHTML += 'preço: ' + item.price + '<br>'

    });
}

//função que pesquisa o produto
const pesquisarProduto = () => {
    //pegamos o valor que o user digita no input
    const idInput = document.getElementById('pesquisarProduto').value;
    //armazenamos o resultado do filtro em uma variavel
    const resultado = produtos.filter(item => item.name.includes(idInput));
    paragrafo.innerHTML = resultado.map(item => item.name);
}

exibirProdutos();
//ouvimos o input e especificamos qual função usar.
document.addEventListener('input', pesquisarProduto);