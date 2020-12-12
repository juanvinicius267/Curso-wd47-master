;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener('click',function(){
        const xhr = new XMLHttpRequest()
        xhr.open('GET','https://ceep.herokuapp.com/cartoes/instrucoes')
        xhr.responseType = 'json'
        xhr.send()
        xhr.addEventListener("load", function() {
            const objeto = xhr.response
            const ajudas = objeto.instrucoes
            ajudas.forEach(function(ajuda){
                adicionaCartaoNoMural(ajuda)
               })
            
        })






        // const ajudas = [
        //   {conteudo: "Bem-Vindo ao Ceep", cor:"#F05450"},
        //   {conteudo:"Clique no btn Linhas para mudar o layout", cor:"#92C4EC"}
        //  ]
        //  ajudas.forEach(function(ajuda){
        //   adicionaCartaoNoMural(ajuda)
        //  })
        // ["Bem-Vindo ao Ceep","Clique no btn Linhas para mudar o layout"].forEach(alert)
    })
    btnAjuda.classList.remove('no-js')
})()