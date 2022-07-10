function multiplica(a, b){
    return a * b;
}

function soma(a, b){
    return a + b;
}

var a = 2;
var b = 1;

if (soma(a, b) < multiplica(a, b)){
    console.log('somar 2 numeros da menos que multiplica-los') // a, b > 2
} else {
    console.log('parabens, achou uma particularidade =)')  // 1, 2
}
