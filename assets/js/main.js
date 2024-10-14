// Pegando os segundos do relógio do Brasil

function getTimeFromSecunds(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString("pt-BR", {
    hour12: false, // Para não mostrar o "PM" na hora
    timeZone: "UTC",
  })
}

// Capturando classes do html

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

// Criando variável "Segundos" e definindo que os segundos começa no 0
let segundos = 0

// Criando variável pro setInterval
let timer

// Função para começar o timer com setInterval
function iniciarRelogio() {
   timer = setInterval(() => {
    segundos++ //Segundos + ele mesmo
    relogio.innerHTML = getTimeFromSecunds(segundos)
  }, 1000)
}

iniciar.addEventListener("click", function (e) {
  clearInterval(timer)
  iniciarRelogio()
})

pausar.addEventListener("click", function (e) {
  clearInterval(timer)
})

zerar.addEventListener("click", function (e) {
  clearInterval(timer)
  relogio.innerHTML = '00:00:00'
  segundos = 0
})
