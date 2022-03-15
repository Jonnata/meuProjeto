/* Spread Operator
Ele nos possibilita combinar os valores de um array com os de um outro array.
Para que possamos entendê-lo melhor, é necessário ter o conceito de array bem assimilado.
 */


let frutas = ["maça", "banana","uva"];
let frutasDois = ["laranja", "abacate", "goiaba"];
let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);




let pessoa = {
    nome: "Vinicius",
    idade: 22
}

let infoPessoal = {
    tel: "12345678",
    rg: 124578955,
    ...pessoa
}
console.log(infoPessoal);


function letras(...paramns){
    console.log(paramns[2])
};
letras("a", "b", "c")

//testando 123