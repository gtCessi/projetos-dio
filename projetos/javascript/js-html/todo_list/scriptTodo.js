const formulario = document.getElementById('form-tarefas');  /* acessar formulario para preencher com tarefas*/
const listaTarefas = document.getElementById('tarefas');  /* div responsavel por montar as tarefas */


form.onsubmit = function(e) {
    e.preventDefault();  /* previne a abertura de outra guia */
    const inputField = document.getElementById('input-tarefa');
    addTask(inputField.value);
    form.reset();  /* limpa o campo de preenchimento do formulario */
};

function addTarefa(description) {
    const containerTarefa = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const nodeDescricaoTarefa = document.createTextNode(description);
    
    novaTarefa.setAttribute('type', 'checkbox');  /* adicionando atributos*/
    novaTarefa.setAttribute('name', description);
    novaTarefa.setAttribute('id', description);

    labelTarefa.setAttribute('for', description);
    labelTarefa.appendChild(nodeDescricaoTarefa);  /* must do para concluir adicao */

    containerTarefa.classList.add('task-item');
    containerTarefa.appendChild(novaTarefa);
    containerTarefa.appendChild(labelTarefa);

    listaTarefas.appendChild(containerTarefa);
};


