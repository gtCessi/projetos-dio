function palindromo(palavra) {
    if (!palavra) return;
    
    const lista = [];
    let palavra2 = '';
    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] !== '')  lista.push(palavra[i]);
    }
    
    const lista2 = lista.reverse();

    for (let i = 0; i < palavra.length; i++) {
        palavra2 += lista2[i];
    }

    console.log(`Palavra: ${palavra} \nPalavra ao contrario: ${palavra2}`)

    if (palavra == palavra2) {
        console.log(`A palavra ${palavra} e um palindromo =)`);
    } else {
        console.log(`A palavra ${palavra} nao e um palindromo =(`);
    }
}

palindromo('as sa');
palindromo('pudim');