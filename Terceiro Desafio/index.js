const footer = document.createElement('footer')

const firstDiv = '<div class="footer-text">Criado por: Paulo Miranda Quagliatto</div>'
const secondDiv = `<div class="footer-text">Visto em: ${Hora()}</div>`
footer.innerHTML = firstDiv + secondDiv

footer.style.margin = 0
footer.style.textAlign = "center"

document.body.appendChild(footer)

document.querySelector('.footer-text').style.margin ="5px"

function Hora(){
    const hora = Date()
    return hora
}