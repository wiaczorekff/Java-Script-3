/*Kelvin é um meteorologista que trabalha para uma grande rede de notícias,
fornecendo as previsões do tempo para o público. Recentemente, a rede decidiu
expandir seu alcance para países que usam diferentes escalas de temperatura.
Agora, Kelvin precisa fornecer as previsões de temperatura em Celsius e
Fahrenheit, além de Kelvin, que é a unidade que ele normalmente usa. Ele não
está familiarizado com as conversões de temperatura e tem uma previsão de
tempo que precisa entregar rapidamente.
É aí que você entra! Seu trabalho será ajudar Kelvin a criar um programa que
converta a temperatura de Kelvin para Celsius e Fahrenheit. A previsão de hoje é
de 293 Kelvin e Kelvin precisa saber quais são essas temperaturas em Celsius e
Fahrenheit.
A importância dessa tarefa está em desenvolversuas habilidades de programação
para resolver problemas do mundo real. Ao aprender como fazer essas
conversões e trabalhar com variáveis, você estará aprimorando suas habilidades
de programação e ajudando Kelvin a realizar seu trabalho de maneira mais
eficiente.
Além disso, essa tarefa também ilustra como a programação pode ser usada em
uma variedade de campos, incluindo a meteorologia. As habilidades que você
está aprendendo aqui não são apenas úteis para se tornar um programador, mas
também podem ser aplicadas em muitos outros trabalhos e indústrias.
1-A previsão do tempo para hoje é de 293 Kelvin. Para começar, crie uma variável
chamada "kelvin" e atribua a ela o valor 293. O valor armazenado na variável
"kelvin" permanecerá constante. Escolha o tipo de variável que é mais adequado
para manter esse valor constante. */

const kelvin = 293;

/*2-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */

// A temperatura em Kelvin para a previsão do tempo de hoje é de 293.


/*3-Celsius é similar a Kelvin — a única diferença é que Celsius é 273 graus menor
que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável
"kelvin". Armazene o resultado em outra variável, chamada "celsius". */

kelvin = 293; // Temperatura em Kelvin
const Celsius = kelvin - 273; // Conversão para Celsius

console.log(Celsius); //imprime na tela

/*4-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */

//ta lá!

/*5-Use a seguinte fórmula para calcular Fahrenheit, e então armazene o resultado
em uma variável chamada "fahrenheit". A fórmula é: Fahrenheit = Celsius * (9/5)
+ 32. No próximo passo, iremos arredondar o número salvo na variável
"fahrenheit". Escolha o tipo de variável que permite que você altere seu valor. */

 kelvin = 293; // Temperatura em Kelvin
 Celsius = kelvin - 273; // Conversão para Celsius

let fahrenheit = Celsius * (9/5) + 32; // Conversão para Fahrenheit
fahrenheit = Math.round(fahrenheit); // Arredonda o valor para um número inteiro

console.log(fahrenheit); // Isso imprimirá a temperatura em graus Fahrenheit no console



/*6-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */



/*7-Quando você converte de Celsius para Fahrenheit, geralmente obtém um
número decimal. Use o método .floor() do objeto Math para arredondar para
baixo a temperatura em Fahrenheit. Salve o resultado na variável "fahrenheit". */

 kelvin = 293; // Temperatura em Kelvin
 Celsius = kelvin - 273; // Conversão para Celsius

fahrenheit = Celsius * (9/5) + 32; // Conversão para Fahrenheit
fahrenheit = Math.floor(fahrenheit); // Arredonda para baixo

console.log(fahrenheit); // Isso imprimirá a temperatura em graus Fahrenheit (arredondada para baixo) no console


/*8-Escreva um comentário acima que explique a linha de código que você acabou
de escrever. */


/*9-Use console.log e interpolação de string para registrar no console a
temperatura em Fahrenheit da seguinte forma: "A temperatura é TEMPERATURA
graus Fahrenheit". Use a interpolação de string para substituir "TEMPERATURA"
pelo valor armazenado na variável "fahrenheit". */

 kelvin = 293; // Temperatura em Kelvin
Celsius = kelvin - 273; // Conversão para Celsius

fahrenheit = Celsius * (9/5) + 32; // Conversão para Fahrenheit
fahrenheit = Math.floor(fahrenheit); // Arredonda para baixo para obter um valor inteiro

console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);


/*10-Execute seu programa para ver seus resultados! */

kelvin = 293; 
Celsius = kelvin - 273; 

fahrenheit = Celsius * (9/5) + 32; 
fahrenheit = Math.floor(fahrenheit); 

console.log("A temperatura é " + fahrenheit + " graus Fahrenheit");


/*11-Ao usar variáveis, seu programa deve funcionar para qualquer temperatura
em Kelvin — basta alterar o valor de "kelvin" e executar o programa novamente.
Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit? */

fahrenheit = (0 - 273) * (9/5) + 32
kelvin = 0; // 0 Kelvin
Celsius = kelvin - 273; 

fahrenheit = Celsius * (9/5) + 32; 
fahrenheit = Math.floor(fahrenheit); // Arredonda para baixo para obter um valor inteiro

console.log("A temperatura é " + fahrenheit + " graus Fahrenheit");



/*12-Ótimo trabalho! Agora Kelvin pode publicar suas previsões tanto em Celsius
quanto em Fahrenheit. Se você quiser praticar um pouco mais, tente fazer o
seguinte: Converta Celsius para a escala Newton usando a equação abaixo:
Newton = Celsius * (33/100). Arredonde a temperatura em Newton para baixo
usando o método .floor(). Use console.log e interpolação de string para registrar
no console a temperatura em Newton. */

kelvin = 293; // Temperatura em Kelvin
Celsius = kelvin - 273; // Conversão para Celsius

fahrenheit = Celsius * (9/5) + 32; // Conversão para Fahrenheit
fahrenheit = Math.floor(fahrenheit); // Arredonda para baixo para obter um valor inteiro

const newton = Celsius * (33/100); // Conversão para a escala Newton
const roundedNewton = Math.floor(newton); // Arredonda para baixo para obter um valor inteiro

console.log("A temperatura é " + Celsius + " graus Celsius.");
console.log("A temperatura é " + fahrenheit + " graus Fahrenheit.");
console.log("A temperatura é " + roundedNewton + " graus Newton.");
