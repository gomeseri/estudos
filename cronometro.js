let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let mile = document.querySelector("#mile");
let iniciar = document.querySelector("#iniciar");
let continua = document.querySelector("#continua");

let resete = document.querySelector("#resete");

console.log(resete);

let intervalo;
let minutosTime = 0;
let segundosTime = 0;
let mileTime = 0;
let pause = true;

function tempo() {
  intervalo = setInterval(() => {
    if (pause) {
      mileTime += 10;
      if (mileTime === 1000) {
        segundosTime++;
        mileTime = 00;
      }
    }
    if (segundosTime === 60) {
      minutosTime++;
      segundosTime = 00;
    }

    minutos.textContent = formatoTempo(minutosTime);
    segundos.textContent = formatoTempo(segundosTime);
    mile.textContent = formataMile(mileTime);
  }, 10);
}
function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}
function formataMile(tempo) {
  return tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo;
}

function pausar() {
  continua.style.display = "none";
  iniciar.style.display = "inline";
  pause = false;
}

function reset() {
  clearTimeout(intervalo);
  mile = 0;
  segundos = 0;
  minutos = 0;
  minutos.innerHTML = "00";
  segundos.textContent = "00";
  mile.textContent = "000";
}

/*
let clientess = [10];
let cliente02 = [];

function transferencia(cliente, pix) {
  if (cliente >= pix) {
    cliente02.pop(`${cliente02}`);
    let sal = clientess[0] + pix;
    cliente02.push(`${sal}`);
    let valor = clientess[0] - pix;
    console.log(`pix realizado com suceso seu saldo ${valor}`);
    clientess.pop(`${clientess[0]}`);
    clientess.push(`${valor}`);
  } else {
    console.log("seu saldo e insufisiente");
  }
}

transferencia(clientess[0], 1);

transferencia(clientess[0], 1);
console.log(cliente02);

let loja = [
  { id: 002, produto: "vaso antigo" },
  { id: 003, produto: "medalha" },
];

loja.push({ id: 003, produto: "moeda" });

console.log(loja[0].id);

let trocarCor = document.querySelector("#trocaCor");
let containe = document.getElementById("containe");
trocarCor.addEventListener("click", cor);
trocarCor.addEventListener("click", corr);

function corr() {
  if ((containe.style.backgroundColor = "red")) {
    containe.style.backgroundColor = "blue";
  }
}
function cor() {
  if ((containe.style.backgroundColor = "blue")) {
    containe.style.backgroundColor = "red";
  }
}
*/
