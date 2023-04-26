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

  const msgSucesso = `O número ${campoB} é maior que o número ${campoA}`

  if (formEValido) {
    //form.submit(); // para enviar o formulário
    const containerMsgSucesso = document.getElementById('mensagem');
    containerMsgSucesso.innerHTML = msgSucesso;
    containerMsgSucesso.style.display = 'block';

    campoA.value = ''
    campoB.value = ''
  } else {
    numeroA.style.border = '1px solid red'
    document.querySelector('.error-msg').style.display = 'block'
  }
})

numeroA.addEventListener('keyup', function(e){
  e.preventDefault();
  if(formEValido) {
    numeroA.style.border = '1px solid red'
    document.querySelector('.error-msg').style.display = 'block'
  } else { 
    numeroA.style.border = ''
    document.querySelector('.error-msg').style.display = 'none'
  }
})
