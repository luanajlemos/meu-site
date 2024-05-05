document.addEventListener('DOMContentLoaded', function() {
    var textElem = document.getElementById('karaoke');
    var words = textElem.innerText.split(' ');
    textElem.innerHTML = ''; // Limpar o texto original

    // Criar um span para cada palavra
    words.forEach(function(word) {
        var newSpan = document.createElement('span');
        newSpan.textContent = word + ' ';
        textElem.appendChild(newSpan);
    });

    var spans = textElem.getElementsByTagName('span');
    var currentWord = 0;

    // Função para 'ler' cada palavra
    function highlightWord() {
        if (currentWord > 0) { // Remover destaque da palavra anterior
            spans[currentWord - 1].classList.remove('highlight');
        }
        if (currentWord < spans.length) {
            spans[currentWord].classList.add('highlight');
            currentWord++;
        } else {
            clearTimeout(timer); // Parar quando todas as palavras forem lidas
            return;
        }
        // Configurar o tempo para a próxima palavra
        var timer = setTimeout(highlightWord, 500); // Ajuste 500ms conforme necessário
    }

    highlightWord(); // Iniciar a leitura
});