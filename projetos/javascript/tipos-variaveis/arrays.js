function modifica(array) {
    if (!array) return console.log(-1); 

    if (array.length === 0) return console.log(-1);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && array[i] !== 0) array[i] = 0;
    }
        return console.log(array);
}

modifica([1, 3, 4, 6, 80, 33, 23, 90]);
modifica([1, 54, 56, 76, 77, 99, 33, 21]);
modifica([]);