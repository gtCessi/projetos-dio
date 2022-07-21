const currentNumberWrapper = document.getElementById('currentNumber');
const currentNumberWrapper_2 = document.getElementById('currentNumber_2');
const myButton = document.getElementById("botao");
const myButton_2 = document.getElementById("botao_2");

var currentNumber = 0;
var currentNumber_2 = 0;

myButton.addEventListener("click", adicionar);
myButton.addEventListener('click', subtrair);
myButton_2.addEventListener("click", adicionar_2);
myButton_2.addEventListener('click', subtrair_2);

function subtrair() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }

    if (currentNumber < -10) {
        alert('Chegou ao limite minimo. Resetando...');
        currentNumber = 0;
    }
}

function adicionar() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }

    if (currentNumber > 10) {
        alert('Chegou ao limite maximo. Resetando...');
        currentNumber = 0;
    }
}

function subtrair_2() {
    currentNumber_2 -= 2;
    currentNumberWrapper_2.innerHTML = currentNumber_2;

    if (currentNumber_2 < 0) {
        currentNumberWrapper_2.style.color = 'red';
    }

    if (currentNumber_2 < -10) {
        alert('Chegou ao limite minimo. Resetando...');
        currentNumber_2 = 0;
    }
}

function adicionar_2() {
    currentNumber_2 += 2;
    currentNumberWrapper_2.innerHTML = currentNumber_2;

    if (currentNumber_2 >= 0) {
        currentNumberWrapper_2.style.color = 'black';
    }

    if (currentNumber_2 > 10) {
        alert('Chegou ao limite maximo. Resetando...');
        currentNumber_2 = 0;
    }
}


