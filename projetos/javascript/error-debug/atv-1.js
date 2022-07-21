function validaArrays(array, numero) {
    try {
        if (!array && !numero) throw new ReferenceError('Insira dados validos.');
    
        if (typeof array !== 'object') throw new TypeError('Insira uma array valida.');
    
        if (typeof numero !== 'number') throw new TypeError('Insira um numero valido.');
    
        if (array.length !== numero) throw new RangeError('Tamanhos invalido.');

        return array;
        
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Reference Error.');
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log('Type Error.');
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log('Range Error.');
            console.log(error.message);
        } else {
            console.log('Erro de tipo desconhecido.');
            console.log(error.message);
        }
    }
}

console.log(validaArrays([], 5));