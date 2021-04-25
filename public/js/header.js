window.addEventListener("load", function() {

    let usuario = sessionStorage.getItem("usuario")
    if (usuario == "hola") {
        let nombre = sessionStorage.getItem("nombreUsuario")

        document.querySelector(".nombre").innerHTML += nombre
        if (nombre == "") {
            document.querySelector(".nombre").innerHTML += "Hola Usuario"
        }

        let logueado2 = document.querySelector(".logueado2")
        logueado2.style.display = "block"
        let logueado3 = document.querySelector(".logueado3")
        logueado3.style.display = "block"
        let logueado4 = document.querySelector(".logueado4")
        logueado4.style.display = "block"
        let deslogueado1 = document.querySelector(".deslogueado1")
        deslogueado1.style.display = "none"
        let deslogueado2 = document.querySelector(".deslogueado2")
        deslogueado2.style.display = "none"
    }

    document.querySelector(".logout").addEventListener("click", function() {
        usuario = "chau"
        sessionStorage.setItem("usuario", usuario)



    })






})