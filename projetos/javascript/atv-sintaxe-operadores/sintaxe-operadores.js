var somaNumeros;
var resultado_10;
var resultado_20;
var igualdadeNum;

function checaNumeros(numero1, numero2) {
    if (!numero1 || !numero2) return console.log('Por favor, digite numeros validos.');

    somaNumeros = numero1 + numero2;
    
    resultado_10 = somaNumeros > 10 ? 'maior' : 'menor';

    resultado_20 = somaNumeros > 20 ? 'maior' : 'menor';

    igualdadeNum = numero1 == numero2 ? 'sao iguais' : 'nao sao iguais';

    console.log(`Os numeros ${numero1} e ${numero2} ${igualdadeNum}. Sua soma e ${somaNumeros}, que e ${resultado_10} que 10 e ${resultado_20} que 20.`);
}

checaNumeros(1, 52);
