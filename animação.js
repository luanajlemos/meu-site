document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('startButton');
    var textElem = document.getElementById('animação');
    var words = textElem.innerText.split(' ');  // Divisão do texto em palavras
    textElem.innerHTML = '';  // Limpeza do conteúdo original

    // Adiciona cada palavra dentro de um novo span
    words.forEach(function(word) {  // Uso de função anônima normal aqui
        var newSpan = document.createElement('span');
        newSpan.textContent = word + ' ';  // Adição de espaço após cada palavra para separação
        textElem.appendChild(newSpan);
    });

    var spans = textElem.getElementsByTagName('span');  // Captura de todos os spans criados
    var currentWord = 0;
    var timer;  // Declaração de timer fora do escopo da função highlightWord

    function highlightWord() {
        if (currentWord > 0) {
            spans[currentWord - 1].classList.remove('highlight');  // Remoção do destaque da palavra anterior
        }
        if (currentWord < spans.length) {
            spans[currentWord].classList.add('highlight');  // Adição do destaque à palavra atual
            currentWord++;
            timer = setTimeout(highlightWord, 500);  // Configuração do timer para a próxima palavra
        } else {
            clearTimeout(timer);  // Limpeza do timer ao final do texto
        }
    }

    startButton.addEventListener('click', function() {  // Listener para o clique no botão
        highlightWord();  // Início da animação ao clicar no botão
    });
});
