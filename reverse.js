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