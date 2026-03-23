const text = `Lis… eu juro, tem dias que eu paro do nada e penso em você como se você estivesse aqui do meu lado.

É estranho explicar, porque a gente tá longe, mas ao mesmo tempo você tá tão presente em mim. Nas coisas simples, nos momentos mais aleatórios… qualquer coisinha já me lembra você, e quando percebo, já tô sorrindo sozinho.

Eu tô aprendendo a gostar de você de um jeito que nunca aconteceu antes. Não é aquela coisa apressada, nem forçada… é leve, natural, como se estivesse acontecendo exatamente do jeito que tem que ser.

E quanto mais eu sinto isso, mais eu tenho certeza que você é diferente… especial de um jeito raro.

E no fim… é você, Lis.`;

let i = 0;
const speed = 30;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

/* música */
const music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}