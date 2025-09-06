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
    let nameTask = document.createElement("p");
    nameTask.classList = "list-task";
    let btn = document.createElement("button");
    btn.className = "clo-btn rmv-btn";
    let remove = btn.textContent = "x";
    let completed = btn.textContent = "√";

    itemList.textContent = itemList.textContent + (nameTask.textContent = nameTask.textContent + tarefa.value);

    lista.appendChild(itemList)
}