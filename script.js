let lista = document.getElementById("list-task");
let tarefa = document.getElementById("new-task");
let btnTask = document.getElementById("add-task");
adicionarTarefa()

function adicionarTarefa() {
    tarefa = document.getElementById("new-task").value;
    /**
     * Verifica se o input não está vazio
     */
    if(tarefa.value == '') {
        alert('Digite o nome da tarefa!');
        return;
    }

    if (tarefas.includes(tarefa.value)) {
        alert('Tarefa adicionada!')
        return;
    }
    
    let itemList = document.createElement("li")
    itemList.push(tarefa.value);

    if (lista.textContent == '') {
        lista.textContent = tarefa.value;
    } else {
    lista.textContent = lista.textContent + ', ' + tarefa.value;
    }
    tarefa.value = '';
}