let tarefa = document.getElementById('task-input');
let lista = document.getElementById('list-task');

function adicionarTarefa() {
    // 1. Verifica se o input não está vazio
    if (tarefa.value === '') {
        alert('Digite um nome para a tarefa!');
        return;
    }

    // 2. Cria um novo elemento <li> para a tarefa
    let itemList = document.createElement("li");
    itemList.textContent = tarefa.value;

    // 3. Cria o botão de 'Concluir'
    let btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.className = "add-btn--clo"; // Adiciona a classe do seu CSS

    // 4. Cria o botão de 'Remover'
    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "clo-btn--rmv"; // Adiciona a classe do seu CSS

    // 5. Adiciona os botões ao item da lista
    itemList.appendChild(btnConcluir);
    itemList.appendChild(btnRemover);

    // 6. Adiciona o item da lista à lista principal (<ul>)
    lista.appendChild(itemList);

    // 7. Adiciona os eventos de clique aos botões
    btnConcluir.addEventListener('click', function() {
        itemList.classList.toggle('concluida'); // Usa .toggle para alternar a classe 'concluida'
    });

    btnRemover.addEventListener('click', function() {
        itemList.remove(); // Remove o item da lista
    });

    // 8. Limpa o campo do input após a adição
    tarefa.value = '';
}