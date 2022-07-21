function palindromo(string) {
    if (!palavra) return;

    let palavra2 = string;
    (palavra2 === string.split('').reverse().join('')) ? console.log   ('Palindromo') : console.log('Nao palindromo');     // split() transforma em objeto (lista de sub strings ordenadas separadas por ''), reverse ()inverte a ordem dessa lista e join() une as substrings em uma unica string. Vale lembrar que o metodo reverse() so funciona em listas e nao em strings.
    
}

palindromo('asa');
palindromo('pudim');
