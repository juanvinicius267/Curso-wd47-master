"use strict";

;(function () {
    var form = document.querySelector(".formNovoCartao");
    var numeroDoCartao = 0;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var textarea = form.querySelector(".formNovoCartao-conteudo");
        var isTextAreaVazio = textarea.value.trim().length === 0;

        if (isTextAreaVazio) {
            var msgErro = document.createElement("div");
            msgErro.classList.add("formNovoCartao-msg");
            msgErro.textContent = "Formulario invalido. Não digite varios nada!";

            var btnSubmit = form.children[form.children.length - 1];
            msgErro.addEventListener("animationed", function () {
                msgErro.removeClass();
            });
            form.insertBefore(msgErro, btnSubmit);
        } else {
            adicionaCartaoNoMural({ conteudo: textarea.value });
        }
        textarea.value = " ";
    });

    form.classList.remove("no-js");
})();