// sintaxe báscica de uma array em js
let array = ["STRING" , 1 , true , "qlqr coisa" , ['array1'] , ["array2"]];
console.log(array);
console.log(array[2]);

let numeros = [1 , 2 ,3, 4, 5, 6, 7 ,8 , 9 , 0] ; 

function multiplica2 (valor) {
    valor = valor * 2;
    console.log(valor);
}

// for each é uma função de arrays que itera por todos os elementos do array e executa uma função...
// sintaxe é array.foreach(function(value , index , array))
// ela recebe três parametros um sendo o valor o atual, o outro o index do numero(opcional) e o array a ser percorrido (opcional)


//numeros.forEach(multiplica2); 
//numeros.forEach(function(valor , index){console.log(valor, index)})

// outra função é o push, que adiciona um novo elemento no final do array, pode ser qlqer elemento

numeros.push(11)
numeros.push(12)
console.log(numeros)

// outra função é o pop, que remove um elemnto do final do array

numeros.pop()
console.log(numeros )

// outra opção é o shift , mas ele remove o elemento do começo do array

numeros.shift()
console.log(numeros)

// temos o unshift , que adiciona um elemento no começo do array

numeros.unshift("hola")
console.log(numeros)

// temos o indexof também que revela o index de um certo elemento

console.log(numeros.indexOf("hola"))

// temos também o metodo splice que remove ou substitui um item pelo seu index

numeros.splice(2)
console.log(numeros)
// ele também pode ser usando em um range de index
numeros.splice(2,4)
console.log(numeros)

// também temos o slice disponivel]
// o slice  ele pega uma parte de um array pelo index e armazena em um novo array

 let novoarray = numeros.slice(1,4)
 console.log(novoarray) 
