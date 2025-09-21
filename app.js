// 1. Array para armazenar a lista de amigos.
// Ele fica fora das funções para não ser resetado a cada clique.
let amigos = [];

function adicionarAmigo() {
    // 2. Seleciona os elementos do HTML com os quais vamos interagir.
    let amigoInput = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Pega o nome digitado, em maiúsculas para padronizar
    let nomeAmigo = amigoInput.value.trim().toUpperCase();

    // 3. Verifica se um nome foi realmente digitado.
    if (nomeAmigo === '') {
        alert("Por favor, digite o nome do amigo!");
        return; // Para a execução da função aqui.
    }
    
    // Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, digite um nome diferente.");
        amigoInput.value = ''; // Limpa o campo
        return;
    }

    // 4. Adiciona o nome do amigo ao array 'amigos'.
    amigos.push(nomeAmigo);

    // 5. Atualiza a lista de amigos na tela.
    // Usamos um ternário para adicionar vírgula apenas se a lista já tiver nomes.
    if (listaAmigos.textContent === '') {
        listaAmigos.textContent = nomeAmigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo;
    }

    // 6. Limpa o campo de input para o próximo nome.
    amigoInput.value = '';
}

function sortearAmigo() {
    // 7. Verifica se há amigos suficientes para o sorteio.
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para realizar o sorteio!");
        return;
    }

    // 8. Embaralha o array de amigos (Algoritmo de Fisher-Yates).
    for (let i = amigos.length - 1; i > 0; i--) {
        // Sorteia um índice aleatório entre 0 e i.
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos de posição.
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // 9. Seleciona o elemento que mostrará o resultado.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // 10. Cria os pares e os exibe na tela.
    for (let i = 0; i < amigos.length; i++) {
        // O último amigo da lista tira o primeiro para fechar o ciclo.
        if (i === amigos.length - 1) {
            resultado.innerHTML += `<p>${amigos[i]} → ${amigos[0]}</p>`;
        } else {
            // Um amigo tira o próximo da lista embaralhada.
            resultado.innerHTML += `<p>${amigos[i]} → ${amigos[i + 1]}</p>`;
        }
    }
}