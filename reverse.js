// Função para inverter a ordem das palavras
function inverterOrdemPalavras(formulario) {
    formulario.preventDefault(); // Evita que a página seja atualizada ao clicar no "button"

    var text1 = document.getElementById("text1").value; // recebe o valor do inpt
    var palavras = text1.split(" "); // Divide a frase em palavras
    var palavrasReversas = palavras.reverse(); // Inverte a ordem
    var result = palavrasReversas.join(" "); // Junta as palavras

    document.getElementById("result").textContent = result; // resultado dentro do span
}

// Adiciona o evento de clique ao botão
document.getElementById("btn").addEventListener("click", inverterOrdemPalavras);

// Função para remover caracteres duplicados
function removerCaracteresDuplicados(formulario2) {
    formulario2.preventDefault(); // evita a atualização da pagina

    var text2 = document.getElementById("text2").value; // recebe o valor do inpt
    var caracteresUnicos = ""; // Variável para armazenar os caracteres únicos

    for (var i = 0; i < text2.length; i++) {
        if (caracteresUnicos.indexOf(text2[i]) === -1) {
            caracteresUnicos += text2[i]; // Adiciona o caractere à string única se não estiver presente
        }
    }

    document.getElementById("result2").textContent = caracteresUnicos; // Insere o resultado no span
}

// Adiciona o evento de clique ao botão
document.getElementById("btn2").addEventListener("click", removerCaracteresDuplicados);

// Função para verificar se uma string é palindrômica
function ehPalindromo(str) {
    var reversedStr = str.split("").reverse().join(""); // Inverte a string
    return str === reversedStr; // Verifica se a string original é igual à string invertida
}

// Função para encontrar a maior substring palindrômica
function encontrarSubstringPalindromo(formulario3) {
    formulario3.preventDefault(); // Evita que a página seja atualizada

    var text3 = document.getElementById("text3").value; // recebe valor do input
    var tamMax = 0; // armazena tamanho maximo do palindromo
    var palindromo = ""; // armazena substring encontrada
    // Percorre todas as substrings possíveis
    for (var i = 0; i < text3.length; i++) {
        for (var j = i + 1; j <= text3.length; j++) {
            var substring = text3.substring(i, j); // Obtém a substring atual

            if (ehPalindromo(substring) && substring.length > tamMax) {
                tamMax = substring.length; // Atualiza o comprimento máximo
                palindromo = substring; // Atualiza a substring palindrômica encontrada
            }
        }
    }

    document.getElementById("result3").textContent = palindromo; // Insere o resultado no span
}

// Adiciona o evento de clique ao botão
document.getElementById("btn3").addEventListener("click", encontrarSubstringPalindromo);