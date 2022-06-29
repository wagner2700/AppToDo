const nameSing = document.querySelector('.name')
const lastName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const repeatePassword = document.querySelector('.repeatePassword')
const button = document.querySelector('.button')
const aviso = document.querySelector('.msg')
const msg_01 = 'Formato Inválido'



button.addEventListener('click' , (e)=>{
  e.preventDefault()
  console.log('prevent')
})

const mensagem = (display , text)=>{
    aviso.style.display = display 
    aviso.innerHTML = text
}

const habilitaBtnSing= (disab) =>{
  if(disab){
    button.removeAttribute('disabled')
  }
  else{
    button.setAttribute('disabled' , ' ')
  }
}

const regexNum = /[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i



  function validacao1() {
    if  (regexNum.test(email.value) && password.value.length > 4 && password.value == repeatePassword.value && nameSing.value != '' && lastName.value !='') { 
      mensagem('none', '')
      habilitaBtnSing(true)
      console.log('passouteste1')
      button.classList.remove('buttonRed')
      
      
    }
    

    

    else {
      mensagem('block', msg_01)
      habilitaBtnSing(false)
      console.log('ñPassouteste')
      button.classList.add('buttonRed')

      
    }

  
    }

  

document.addEventListener('change' , validacao1)


