const btnSubmit = document.getElementById("btn-submit");
const nome = document.getElementById("nome");
const hobbies = document.getElementsByName("hobbies");
const nacionalidades = document.getElementsByName("nacionalidade");

const msg = document.getElementById("msg");

const msg_01 = "Desculpe, ainda não estamos recrutando bruxos no Brasil! <br>";
const msg_02 = "Nome informado invalido";
const msg_03 = "Informar no máximo 04 hobbies";

// funcao habilitar botao

const habilitarBotao = (desab) => {
  if (desab) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "");
  }
};

// funcao de controle de mensagem

const mensagem = (display, text) => {
  msg.style.display = display;
  msg.innerHTML = text;
};

// funcao para aplicarmos o erro no elemento
const erro = (elemento, error) => {
  if (error) {
    elemento.classList.add("error");
  } else {
    elemento.classList.remove("error");
  }
};

let validacao = () => {
  // validacao se o nome excedeu 10 chars
  if (nome.value.length <= 10) {
    erro(nome, true);
    mensagem("block", msg_02);
    habilitarBotao(false);
    return;
  } else {
    erro(nome, false);
    mensagem("none", "");
    habilitarBotao(true);
  }

  // validar se foi digitado numeros no input nome.
  const regexNum = /[0-9]/g;

  if (regexNum.test(nome.value)) {
    erro(nome, true);
    mensagem("block", msg_02);
    habilitarBotao(false);
  } else {
    erro(nome, false);
    mensagem("none", "");
    habilitarBotao(true);
  }
};
document.addEventListener("change", validacao);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});