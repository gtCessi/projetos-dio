const darkModeClass = 'dark-mode';
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];

function changeMode() {
    changeClasses();  // muda classe para 'dark-mode'
    changeText();    // muda texto
}

function changeClasses() {
    body.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText() {
    const lMode = 'Light Mode';
    const dMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)) { // checa na lista de classes da tag(body) por alguma classe passada como parametro. Somente se darkmode estiver ativo
        button.innerHTML = lMode;
        h1.innerHTML = dMode + ' ON';
        return;
    }  

    button.innerHTML = dMode;
    h1.innerHTML = lMode + ' ON';
}

button.addEventListener('click', changeMode);