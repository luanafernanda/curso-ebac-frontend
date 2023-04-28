var formEValido = false;
const form = document.querySelector('#formulario');
const enviarBotao = document.querySelector('#enviarBotao');
const mensagem = document.querySelector('#mensagem');

var campoA, campoB;

function validarFormulario() {
  campoA = parseInt(document.getElementById("numeroA").value)
  campoB = parseInt(document.getElementById("numeroB").value)

  if (campoB > campoA) {
    formEValido = true
  } else {
    formEValido = false
  }
}

enviarBotao.addEventListener('click', function(e) {
  e.preventDefault();
  validarFormulario();

  const msgSucesso = `O número ${campoB} é maior que o número ${campoA}.`
  const msgInvalida = `O número A precisa ser maior que o número B.`

  if (formEValido) {
    const containerMsgSucesso = document.querySelector('#mensagem');
    containerMsgSucesso.innerHTML = msgSucesso;
    containerMsgSucesso.style.display = 'block';
  } else {
    numeroA.style.border = '1px solid red'
    document.querySelector('#mensagem').style.display = 'block'
    const containerMsgInvalida = document.querySelector('#mensagem');
    containerMsgInvalida.innerHTML = msgInvalida;
    containerMsgInvalida.style.backgroundColor = 'red';
  }
})

