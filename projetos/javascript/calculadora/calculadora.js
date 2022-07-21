function calculadora() {
    const operacao = prompt('Calculadora: \n1-Soma(+) \n2-Diferenca(-) \n3-Multiplicacao(*) \n4-Divisao(/) \n5-Divisao Inteira(%) \n6-Potenciacao(**)');

    let numero1 = Number(prompt('Primeiro numero:'));
    let numero2 = Number(prompt('Segundo numero:'));
    var resultado;

    function soma() {
        resultado = numero1 + numero2;
        alert(numero1 + '+' + numero2 + '=' + resultado);
    }
    
    function diferenca() {
        resultado = numero1 - numero2;
        alert(numero1 + '-' + numero2 + '=' + resultado);
    }
    
    function multiplicacao() {
        resultado = numero1 * numero2;
        alert(numero1 + '*' + numero2 + '=' + resultado);
    }
    
    function divisao() {
        resultado = numero1 / numero2;
        alert(numero1 + '/' + numero2 + '=' + resultado);
    }
    
    function divisaoInteira() {
        resultado = numero1 % numero2;
        alert(numero1 + '%' + numero2 + '=' + resultado);
    }
    
    function potenciacao() {
        resultado = numero1 ** numero2;
        alert(numero1 + '**' + numero2 + '=' + resultado);
    }

    switch(operacao) {
        case '1':
            soma();
            break;
        case '2':
            diferenca();
            break;
        case '3':
            multiplicacao();
            break;
        case '4':
            divisao();
            break;
        case '5':
            divisaoInteira();
            break;
        case '6':
            potenciacao();
            break;
        
        default:
            console.log('Nenhuma operacao escolhida')
    }
}

calculadora();
