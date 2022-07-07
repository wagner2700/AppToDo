const email = document.querySelector('.email')

const password = document.querySelector('.inputPassword')

const btnSubmit = document.getElementById('submit')

const msg = document.querySelector('.msg')

const msg01 = 'Minimo 6 Caracteres'

const msg02 = 'Formato de E-mail Inválido'

const comentarioArray = []

const storage = window.localStorage

const regexNum = /[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/

btnSubmit.addEventListener('click' , (event)=>{
event.preventDefault();

console.log('clicou prevent')


});

// if(email.value.length > 0){

  
 

 
// }

// 
// })



if(localStorage.email){ 
document.getElementById('inputEmail').value = localStorage.email
}


var salvarData = function(){
 

  var emailLocalStorage = document.querySelector('.email').value
  storage.setItem('email' , emailLocalStorage)
  console.log(emailLocalStorage)
  
}




const validacao = () => {
  if( regexNum.test(email.value)) {
    
    
    
    mensagem('none', '')
    habilitaBtn(true)
    console.log('habilitado')
    
    

  } else {
    mensagem('block', msg01)
    habilitaBtn(false)
    console.log('desabilitado')

   
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



document.addEventListener('change',validacao)
document.onchange = salvarData



// password.value.length == 0  && email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ||email.value.indexOf('.') - email.value.indexOf('@') == 1
// const regexNum = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/