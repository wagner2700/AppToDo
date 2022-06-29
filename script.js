const email = document.querySelector('.email')

const password = document.querySelector('.inputPassword')

const btnSubmit = document.getElementById('submit')

const msg = document.querySelector('.msg')

const msg01 = 'Minimo 6 Caracteres'

const msg02 = 'Formato de E-mail Inválido'



btnSubmit.addEventListener('click' , (event)=>{
event.preventDefault()

console.log('clicou prevent')
})




const validacao = () => {
  if(password.value.length == 0  && email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ||email.value.indexOf('.') - email.value.indexOf('@') == 1 ) {
    mensagem('block', msg01)
    habilitaBtn(false)
    console.log('desabilitado')
    
  if(email.value.length <= 3){
    mensagem('block', msg01)
    habilitaBtn(false)
    console.log('desabilitado')
  }

  } else {

    mensagem('none', '')
    habilitaBtn(true)
    console.log('habilitado')
   
  }

}



//habilita btn

const habilitaBtn = function (desab) {
  if (desab) {
    btnSubmit.removeAttribute('disabled')
  } else {
    btnSubmit.setAttribute('disabled' , '')
  }
}

const mensagem = function (display, text) {
  msg.style.display = display
  msg.innerHTML = text
}



document.addEventListener('change', validacao)




// const regexNum = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/
 