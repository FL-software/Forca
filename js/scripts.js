let palavras = ["Advogado", "Aventura", "Background", "Cair", "Campanha", "Cenario",
                "Critico", "Mestre", "Dungeon", "Escudo", "Iniciativa", "Metajogo",
                "NPC", "OP", "Personagem", "Plot", "Combo", "Regra", "Roleplay",
                "RPG", "Sessão", "Sistema", "Teste", "Turno", "Espada", "Arco"]
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
let chances = 6;
let acertos = 0;
let imagem = 0;
let posicao;
let alfabeto = "abcdefghijklmnopqrstuvwxyz"
let letras = alfabeto.split("");

for (posicao = 0; posicao < palavra.length; posicao++) {
    let span = document.createElement("span");
    let div = document.getElementById("palavra");

    span.setAttribute('id', posicao);

    div.appendChild(span); 
}

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let div = document.getElementById("letras");
    let letra = document.createTextNode(letras[posicao]);

    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolherLetra(\''+ letras[posicao] +'\')');
    botao.setAttribute('id', letras[posicao]);

    div.appendChild(botao);
}

function escolherLetra(letra) {
    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra.toUpperCase() === palavra [posicao].toUpperCase()) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);
            let botao = document.getElementById(letra);

            span.appendChild(l);

            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }

    if (acertou === false) {
        imagem++;

        let forca = document.getElementById("forca");
        
        forca.src = "img/forca-" + imagem + ".jpg";

        let botao = document.getElementById(letra);

        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    if (chances === 0 || acertos === palavra.length){
        let mensagem = document.createElement("p");
        let t1 = chances === 0 ? document.createTextNode("Você perdeu!") : document.createTextNode("Você venceu!");
        let botao = document.createElement("button");
        let t2 = document.createTextNode("Jogar novamente");
        let div = document.getElementById("novo");

        mensagem.appendChild(t1);

        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}