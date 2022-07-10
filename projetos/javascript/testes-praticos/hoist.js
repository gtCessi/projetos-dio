
var a = 45;
console.log(a);

{
    let a = 45645;  // let e o comando que permite declarar variaveis no escopo do bloco de codigo
    console.log(a);
}

console.log(a);

{
    var a = 123123; // altera valor global
    console.log(a);  //print bloco de codigo, a tem valor global
}

console.log(a);   // a tem valor global, alterado no bloco acima