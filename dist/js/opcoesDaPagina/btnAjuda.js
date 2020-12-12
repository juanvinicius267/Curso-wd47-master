'use strict';

;(function () {
    var btnAjuda = document.querySelector('#btnAjuda');
    btnAjuda.addEventListener('click', function () {

        var ajudas = [{ conteudo: "Bem-Vindo ao Ceep", cor: "#F05450" }, { conteudo: "Clique no btn Linhas para mudar o layout", cor: "#92C4EC" }];
        ajudas.forEach(function (ajuda) {
            adicionaCartaoNoMural(ajuda);
        });
        // ["Bem-Vindo ao Ceep","Clique no btn Linhas para mudar o layout"].forEach(alert)
    });
    btnAjuda.classList.remove('no-js');
})();