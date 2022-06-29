// //habilita btn
// const habilitaBtn = function (desab) {
//   if (desab) {
//     btnSubmit.removeAttribute('disable')
//   } else {
//     btnSubmit.setAttribute('disable')
//   }
// }
// const mensagem = function (display, text) {
//   msg.style.display = display
//   msg.innerHTML = text
// }
function validacao() {
  if ((email.value = ' ')) {
    mensagem('block', msg01)
    habilitaBtn(false)
    console.log('menor')
    return
  } else {
    mensagem('none', '')
    habilitaBtn(true)
    console.log('maior')
    habilitaBtn(true)
  }
  Array.from(email)
  console.log(email.lenght)
}
