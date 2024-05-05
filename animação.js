document.addEventListener('DOMContentLoaded', function() {
    var textElem = document.getElementById('animação');
    var words = textElem.innerText.split(' '); // Separa o texto em palavras
    textElem.innerHTML = ''; // Limpa o conteúdo original

    // Adiciona cada palavra dentro de um span
    words.forEach(function(word) {
        var newSpan = document.createElement('span');
        newSpan.textContent = word + ' '; // Adiciona a palavra com um espaço no final
        textElem.appendChild(newSpan);
    });

    var spans = textElem.getElementsByTagName('span'); // Captura todos os spans criados
    var currentWord = 0;
    var timer; // Definir o timer fora para poder limpar

    function highlightWord() {
        if (currentWord > 0) {
            spans[currentWord - 1].classList.remove('highlight'); // Remove highlight da palavra anterior
        }
        if (currentWord < spans.length) {
            spans[currentWord].classList.add('highlight'); // Adiciona highlight na palavra atual
            currentWord++;
            timer = setTimeout(highlightWord, 500); // Continue para a próxima palavra
        } else {
            clearTimeout(timer); // Para de repetir ao fim do texto
        }
    }

    highlightWord(); // Inicia o destaque das palavras
});