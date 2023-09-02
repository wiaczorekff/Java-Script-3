/*1) Registro de idade no console: Sua tarefa é usar a função console.log()
para imprimir a sua idade no console do navegador. console.log() é
uma função do JavaScript usada para imprimir a saída em um
console, geralmente útil para depuração.*/

console.log(23);

/*2)Registrar o número de semanas de programação: Agora, registre o
número de semanas que você programou usando a mesma função
console.log().*/

console.log(32 + " semanas ");

/*3)Usando comentários: Comentários são anotações que você pode
adicionar ao seu código que não são executadas. Use um comentário
de várias linhas ( Comentário ) em seu código. Eles são úteis para
explicar o que seu código faz.*/

/*4) Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
de dados, incluindo números (number), texto (string), objetos
(object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
dados.*/ 
let meuNome = "Felipe";
var meuSobrenome = "Wiaczorek";
let municoes = " CBC .50"
const numeroDePatos = 25;
let canetaAzul = municoes + true;
const armeiroTatico = canetaAzul + " fuzil";

/*Adicionando 3.5 à sua idade: O JavaScript permite operações
aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
usando um operador de adição (+) e registre o resultado com
console.log().*/

var minhaIdade = 23;
console.log(minhaIdade + 3.5);

/* 6)Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado. */

// Obtém a data atual
const dataAtual = new Date();
// Define a data do pouso na lua em 1969
const anoPousoLua = 1969;
// Obtém o ano atual
const anoAtual = dataAtual.getFullYear();
// Calcula quantos anos se passaram desde 1969
const anosPassados = anoAtual - anoPousoLua;
// Registra o resultado
console.log(`Desde o pouso na lua em 1969 se passaram ${anosPassados} anos.`);

/*7) Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
resultado usando console.log(). */
console.log(65 / 240);

/*8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
resultado. Esta é uma operação aritmética simples usando o
operador de multiplicação (*). */
let numero1 = 0.2708;
let numero2 = 100;
let resultado = numero1 * numero2;
console.log(resultado);

/*9) Concatenação de strings: Em JavaScript, você pode concatenar (unir)
strings usando o operador de concatenação (+). Sua tarefa é
concatenar as strings 'Hello' e 'World' e registrar o resultado.*/
console.log("hello" + "word");

/*10) Concatenação de strings com espaço: Agora, concatene
'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
palavras.*/
console.log("hello " + "word");




/*11) Usando a propriedade length: Em JavaScript, a propriedade
.length é usada para obter o número de caracteres em uma string.
Sua tarefa é registrar o número de caracteres na string 'Teaching the
world how to code' usando a propriedade .length. 
A propriedade .length em JavaScript é como uma ferramenta que nos diz quantos caracteres 
(letras, números ou símbolos) estão na string. Em outras palavras, ela conta quantos
 "pedacinhos" a string possui. */

 const minhaString = 'Teaching the world how to code';
const numeroDeCaracteres = minhaString.length;

console.log("A string tem" + numeroDeCaracteres + " caracteres.");




/*12) Usando o método toUpperCase(): Este método é usado para
converter todas as letras de uma string para maiúsculas. Use o
método .toUpperCase() para converter a string 'Kaian Novais' em
maiúsculas e registre o resultado. */

let nomeDoProfessor = "kaian novais";
const maiusculas = nomeDoProfessor.toUpperCase();
console.log(maiusculas);



/*13) Removendo espaços em branco: O método .trim() é usado
para remover espaços em branco do início e do final de uma string.
Sua tarefa é remover os espaços em branco no início e no final da
string “ Professor Kaian Novais ” usando o método .trim(). */

let nomeDoProfessor2 = " professor kaian Novais ";
const nomeSemEspacos = nomeDoProfessor.trim();
console.log(nomeSemEspacos);

/*14) Gerando um número aleatório: A função Math.random() é
usada para gerar um número aleatório entre 0 (inclusive) e 1
(exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
100 e registrar o resultado. */


const numeroAleatorio = Math.random();
const numeroEntre0e10 = numeroAleatorio * 100;
const numeroInteiro = Math.floor(numeroEntre0e10) + 1;
console.log(numeroInteiro); 



/*15) Encontrando o próximo inteiro maior: O método Math.ceil() é
usado para arredondar um número para cima até o próximo número
inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
registrar o resultado. 
O Math.ceil() é como um amigo que sempre arredonda para cima. 
Ele olha para o número decimal e, se houver até mesmo uma pequena parte depois 
da vírgula, ele arredonda para o próximo número inteiro maior.*/

const numeroDecimal = 43.8;
const numeroArredondado = Math.ceil(numeroDecimal);
console.log(numeroArredondado); 



/*16) Verificando se um número é um número inteiro: O método
Number.isInteger() é usado para determinar se um valor é um
número inteiro. Sua tarefa é verificar se o número 2017 é um número
inteiro e registrar o resultado.
O Number.isInteger() é como um inspetor de números que verifica se um número é 
um número inteiro. Ele retorna true se o número for um inteiro e false se não for.*/


const numeral1 = 2017;
const numeral2 = 5.5;

console.log(Number.isInteger(numero1)); 
console.log(Number.isInteger(numero2)); 

