let nome = window.document.getElementById("nome")
let email = document.querySelector("input#email")
let assuto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txt.innerHTML = "Nome Inválido!!"
        txt.style.color = "red"
        nomeOk = false
    } else {
        txt.innerHTML = "Nome Válido!!"
        txt.style.color = "yellow"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Inválido!!"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail Válido!!"
        txtEmail.style.color = "yellow"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Assunto Inválido!! digite até 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = "Assunto Válido!!"
        txtAssunto.style.color = "yellow"
        assuntoOk = true
    }
}


function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!!")
    } else {
        alert("Preencha os campos corretamente antes de enviar!!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "400px"
}