window.addEventListener("load", function() {



    let logIn = true
    document.querySelector(".botonregistrarse").addEventListener("click", function() {
        logIn = false
        alert(logIn)
        if (logIn == false) {

            let logueado1 = document.querySelector(".logueado1")
            logueado1.style.display = "block"
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
    })












})