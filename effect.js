
let puntos;
let iconos = []
let selecciones = []
const casino = document.getElementById('tablero')
const musica = new Audio('assets/pokemon_casino_g&s.mp3')

generarTablero()

function cargarIconos() {
  iconos = [
    '<i class="fas fa-star"></i>',
    '<i class="fa-regular fa-face-grin-stars"></i>',
    '<i class="fas fa-star-of-life"></i>',
    '<i class="fa-solid fa-lemon"></i>',
    '<i class="fa-solid fa-anchor"></i>',
    '<i class="fa-solid fa-heart"></i>',
    '<i class="fa-solid fa-clover"></i>',
    '<i class="fa-solid fa-bell"></i>',
    '<i class="fa-solid fa-dice"></i>',
    '<i class="fas fa-chess-knight"></i>',
    '<i class="fas fa-chess"></i>',
    '<i class="fa-solid fa-cloud-bolt"></i>',
  ]
}

function generarTablero() {
  puntos = 0
  document.getElementById("puntos").innerHTML = "Puntos: " + puntos
  cargarIconos()
  selecciones = []
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  for (let i = 0; i < 24; i++) {
    tarjetas.push(`<div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                      <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                          ${iconos[0]}
                        </div>
                        <div class="cara superior">
                          <i class="far fa-question-circle"></i>
                        </div>
                      </div>
                    </div>`)
      if (i % 2 == 1) {
        iconos.splice(0, 1)
      }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
  }

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i)
  if (tarjeta.style.transform != "rotateY(180deg)") {
      tarjeta.style.transform = "rotateY(180deg)"
      selecciones.push(i)
    }
    if (selecciones.length == 2) {
      deseleccionar(selecciones)
      selecciones = []
  }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
    let trasera1 = document.getElementById("trasera" + selecciones[0])
    let trasera2 = document.getElementById("trasera" + selecciones[1])
    if (trasera1.innerHTML != trasera2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
      tarjeta1.style.transform = "rotateY(0deg)"
      tarjeta2.style.transform = "rotateY(0deg)"
    } else {
      trasera1.style.background = "#e7bd42"
      trasera2.style.background = "#e7bd42"
      puntos++;
      document.getElementById("puntos").innerHTML = "Puntos: " + puntos
    }
  }, 1000);
}

function playSound(){
  musica.play()
}

casino.addEventListener('click',()=>playSound())
