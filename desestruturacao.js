let pessoa = {
    nome: "Vinicius",
    altura: 1.80
}
const {nome, altura} = pessoa;
console.log(altura);



let listaCompras = ["pão","leite","açucar"];
const [item1, item2, item3] = listaCompras;
console.log(item2);



let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [, bariloche,, china] = destinosIncriveis;
console.log(bariloche)

/* structuring
Mas o que seria desestruturação? Se procurarmos sua definição, 
vamos encontrar: A sintaxe de atribuição por desestruturação
é uma expressão que permite a extração de dados,
tanto de arrays como de propriedades de objetos, em diferentes variáveis. 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao*/