let tarefa = document.getElementById('task-input')
let lista = document.getElementById('list-task');
let button = document.getElementById('add-btn');

function adicionarTarefa() {
    tarefa.value;
    
    /**
     * Verifica se o input não está vazio
     */
    if(tarefa.value == '') {
        alert('Digite o nome da tarefa!');
        return;
    }
    
    let itemList = document.createElement("li");

    
    itemList.textContent = itemList.textContent + `${tarefa.value}`;

    lista.appendChild(itemList)
}