; (function () {
    const form = document.querySelector(".formNovoCartao")
    let numeroDoCartao = 0

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        const textarea = form.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0

        if (isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulario invalido. Não digite varios nada!"

            const btnSubmit = form.children[form.children.length - 1]
            msgErro.addEventListener("animationed", function () {
                msgErro.removeClass()
            })
            form.insertBefore(msgErro, btnSubmit)
        }

        else {
            adicionaCartaoNoMural({conteudo: textarea.value})
        }
        textarea.value = " "

    })

 
        

    form.classList.remove("no-js")

})()